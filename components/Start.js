import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState } from "react";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <ImageBackground
      source={require("../img/Background Image.png")}
      style={[styles.bgImage, styles.container]}
    >
      <Text style={styles.header}>Let's Chat</Text>
      <View style={styles.input}>
        <TextInput
          value={name}
          onChangeText={(name) => setName(name)}
          style={styles.textInput}
          placeholder="Type username here"
        />
        <Text>Choose background color:</Text>
        <View style={styles.colorOptions}>
          <TouchableOpacity style={styles.colorButton}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.colorButton}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.colorButton}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.colorButton}>
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Start Chatting"
          // pass name data to Screen2 on screen transition
          onPress={() => navigation.navigate("Chat", { name: name })}
          style={styles.startChattingButton}
        />
      </View>
    </ImageBackground>
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
  header: {
    fontSize: 45,
    fontWeight: 600,
    color: "#FFFFFF",
  },
  input: {
    backgroundColor: "white",
  },
  startChattingButton: {
    fontSize: 16,
    fontWeight: 600,
    color: "#FFFFFF",
    backgroundColor: "#757083",
  },
  colorOptions: {
    flexDirection: "row",
  },
  colorButton: {
    width: "10%",
    backgroundColor: "#090C08",
    borderRadius: 50,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});

export default Start;
