import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <TextInput style={styles.textInput} value={text} onChangeText={setText} placeholder="Type something here"></TextInput>
        <Text style={styles.textInput}>You typed: {text}</Text>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    border: "1px solid red"
  }, 
  box1: {
    backgroundColor: "purple",
    flex: 4
  },
  box2: {
    backgroundColor: "blue",
    flex: 4
  },
  box3: {
    backgroundColor: "green",
    flex: 4
  },
  textInput: {
    width: '88%',
    borderWidth: 1,
    height: 50,
    padding: 10,
    backgroundColor: "white"
  },
});

export default App;
