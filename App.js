import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  // alert users
  const alertMyText = () => {
    Alert.alert(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="Type something here"
      ></TextInput>
      <Text style={styles.textInput}>You typed: {text}</Text>
      <TouchableOpacity
        onPress={alertMyText}
      >
        <Text>Press here</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={{fontSize:110}}>This text is so big! And so long! You have to scroll!</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    border: "1px solid red",
  },
  box1: {
    backgroundColor: "purple",
    flex: 4,
  },
  box2: {
    backgroundColor: "blue",
    flex: 4,
  },
  box3: {
    backgroundColor: "green",
    flex: 4,
  },
  textInput: {
    width: "88%",
    borderWidth: 1,
    height: 50,
    padding: 10,
    backgroundColor: "white",
  },
});

export default App;
