import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const Chat = ({route, navigation}) => {
  // get name and color data from Start component
  const { name } = route.params;
  const {color} = route.params;

  // pass name to navigation title once right after component is mounted
  useEffect(() => {
    navigation.setOptions({title: name});
  }, []);

  // set message state
  const [messages, setMessages] = useState([]);
  
  // set initial message following Gifted Chat message object format
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any"
        }
      }
    ]);
  }, []);

  // append new messages to messages array
  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  };

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chat;
