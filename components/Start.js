import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useState } from "react";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <ImageBackground
      source={require("../img/Background-Image.png")}
      style={styles.bgImage}
    >
      <Text style={styles.header}>Let's Chat</Text>
      <View style={styles.input}>
        <View style={styles.textBox}>
          {/* <Image source={require("../img/icon.svg")} style={styles.icon} /> */}
          <TextInput
            value={name}
            onChangeText={(name) => setName(name)}
            style={styles.textInput}
            placeholder="Your Name"
          />
        </View>
        <View style={styles.bgColorSection}>
          <Text>Choose background color:</Text>
          <View style={styles.colorOptions}>
            <TouchableOpacity style={[styles.colorButton, styles.black]}></TouchableOpacity>
            <TouchableOpacity style={[styles.colorButton, styles.purple]}></TouchableOpacity>
            <TouchableOpacity style={[styles.colorButton, styles.blue]}></TouchableOpacity>
            <TouchableOpacity style={[styles.colorButton, styles.green]}></TouchableOpacity>
          </View>
        </View>
        <Pressable
          // pass name data to Screen2 on screen transition
          onPress={() => navigation.navigate("Chat", { name: name })}
          style={styles.startChattingButton}
        >
          <Text style={{color: "#FFFFFF"}}>Start Chatting</Text>
        </Pressable>
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
  textBox: {
    marginTop: 10,
    marginBottom: 15,
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  // icon: {
  //   width: 50,
  //   height: 50,
  //   objectFit: "cover"
  // },
  textInput: {
    borderWidth: 1,
    fontSize: 16, 
    fontWeight: 300, 
    color: "#757083",
    width: "100%",
    height: "100%",
    borderRadius: 4
  },
  header: {
    fontSize: 45,
    fontWeight: 600,
    color: "#FFFFFF",
    top: "-12%"
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
    backgroundColor: "#757083",
    height: "18%",
    alignItems: "center",
    justifyContent: "center"
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
