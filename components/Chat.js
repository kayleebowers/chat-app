import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { useEffect, useState } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { addDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";

const Chat = ({db, route, navigation, isConnected}) => {
  // get name and color data from Start component
  const { name } = route.params;
  const {color} = route.params;
  const {userID} = route.params;

  // pass name to navigation title once right after component is mounted
  useEffect(() => {
    navigation.setOptions({title: name});
  }, []);

  // set message state
  const [messages, setMessages] = useState([]);
  
  // send and store messages through Firestore database
  useEffect(() => {
    // make database query
    const dbQuery = query(collection(db, "messages"), orderBy("createdAt", "desc"));

    // get data from collection snapshot
    const unsubMessages = onSnapshot(dbQuery, (documentsSnapshot) => {
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
    });

    // unsubscribe to prevent memory leaks
    return () => {
      if (unsubMessages) unsubMessages();
    }
  }, []);


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

  // add new messages to db
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
  };

  // // append new messages to messages array
  // const onSend = (newMessages) => {
    // setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  // };

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderBubble={renderBubble}
        user={{
          _id: userID,
          name: name
        }}
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
