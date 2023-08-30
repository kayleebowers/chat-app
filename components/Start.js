import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>Hello Screen1</Text>
      <TextInput
        value={name}
        onChangeText={(name) => setName(name)}
        style={styles.textInput}
        placeholder="Type username here"
      />
      <Button
        title="Go to Screen2"
        // pass name data to Screen2 on screen transition
        onPress={() => navigation.navigate("Screen2", {name: name})}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Start;
