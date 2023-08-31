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
      style={styles.bgImage}
    >
      <Text style={styles.header}>Let's Chat</Text>
      <View style={styles.input}>
        <TextInput
          value={name}
          onChangeText={(name) => setName(name)}
          style={styles.textInput}
          placeholder="Type username here"
        />
        <View style={styles.bgColorSection}>
          <Text>Choose background color:</Text>
          <View style={styles.colorOptions}>
            <TouchableOpacity style={[styles.colorButton, styles.black]}></TouchableOpacity>
            <TouchableOpacity style={[styles.colorButton, styles.purple]}></TouchableOpacity>
            <TouchableOpacity style={[styles.colorButton, styles.blue]}></TouchableOpacity>
            <TouchableOpacity style={[styles.colorButton, styles.green]}></TouchableOpacity>
          </View>
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
  bgImage: {
    width: "100%",
    height: "100%",
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
    height: "44%",
    width: "88%",
    top: "22%",
    justifyContent: "space-between",
    padding: "5%",
  },
  startChattingButton: {
    fontSize: 16,
    fontWeight: 600,
    color: "#FFFFFF",
    backgroundColor: "#757083",
  },
  colorOptions: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  colorButton: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginHorizontal: 5,
  },
  black: {
    backgroundColor: "#090C08",
  },
  purple: {
    backgroundColor: "#474056",
  },
  blue: {
    backgroundColor: "#8A95A5",
  },
  green: {
    backgroundColor: "#B9C6AE",
  },
});

export default Start;
