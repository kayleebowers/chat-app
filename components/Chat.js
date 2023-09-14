import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { useEffect, useState } from "react";
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat";
import { addDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomActions from "./CustomActions";
import MapView from 'react-native-maps';

const Chat = ({db, route, navigation, isConnected}) => {
  // get name and color data from Start component
  const { name, color, userID } = route.params;

  // set message state
  const [messages, setMessages] = useState([]);

  // pass name to navigation title once right after component is mounted
  useEffect(() => {
    navigation.setOptions({title: name});
  }, []);

  // variable to properly disable old listeners and prevent memory leaks
  let unsubMessages;

  // send and store messages through Firestore database
  useEffect(() => {
    // get data from collection snapshot
    if (isConnected === true) {
      // deregister current onSnapshot() listener to avoid registering multiple listeners
      if (unsubMessages) unsubMessages();
      unsubMessages = null;

      // make database query
      const dbQuery = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      unsubMessages = onSnapshot(dbQuery, (documentsSnapshot) => {
      const messages = [];
      documentsSnapshot.forEach((document) => {
        messages.push({
          _id: document.id,
          ...document.data(),
          createdAt: new Date(document.data().createdAt.toMillis()),
          avatar: "https://placeimg.com/140/140/any"
        })
      })
      setMessages(messages);
      cacheUserMessages(messages);
      });
    } else {
      loadCachedMessages();
    }

    // unsubscribe to prevent memory leaks
    return () => {
      if (unsubMessages) unsubMessages();
    }
  }, [isConnected]);

  // add messages to AsyncStorage 
  const cacheUserMessages = async (chatsToCache) => {
    try {
      await AsyncStorage.setItem("user_messages", JSON.stringify(chatsToCache));
    } catch (error) {
      console.log(error.message);
    }
  }

  // load messages from AsyncStorage
  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem("user_messages") || [];
    setMessages(JSON.parse(cachedMessages));
  }

  // set initial message following Gifted Chat message object format
  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: "Hello developer!",
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: "React Native",
  //         avatar: "https://placeimg.com/140/140/any"
  //       }
  //     }, 
  //     // notify user of system message
  //     {
  //       _id: 2,
  //       text: "This is a system message",
  //       createdAt: new Date(),
  //       system: true
  //     }
  //   ]);
  // }, []);

  // customize left and right side chat bubbles
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        }, 
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }

  // only show inputToolbar with connection
  const renderInputToolbar = (props) => {
    if (isConnected === true) {
      return <InputToolbar {...props} /> 
    } else return null;
  }

  // add new messages to db
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
  };

  // // append new messages to messages array
  // const onSend = (newMessages) => {
    // setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  // };

  // render CustomActions component in chat
  const renderCustomActions = (props) => {
    // passing props so the action can be customized (includes onSend() method)
    return <CustomActions storage={storage} userID={userID} {...props} />
  }

  // render CustomView with MapView if there's location data 
  const renderCustomView = (props) => {
    const { currentMessage } = props;
    if (currentMessage.location) {
      return (
        <MapView
          style={{width: 150,
            height: 100,
            borderRadius: 13,
            margin: 3}}
          region={{
            latitude: currentMessage.location.latitude,
            longitude: currentMessage.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      );
    }
    return null;
  }

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        user={{
          _id: userID,
          name: name
        }}
        renderActions={renderCustomActions}
        renderCustomView={renderCustomView}
      />
      {/* ensure Android keyboards don't cover user input */}
      { Platform.OS === "android" ? <KeyboardAvoidingView behavior="height" /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
