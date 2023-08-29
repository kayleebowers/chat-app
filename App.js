import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
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
      <Button
        title="Save"
        onPress={() => {
          alertMyText();
        }}
      />
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
