import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native";
import { useState } from "react";
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
  // Initialize Firebase Authentication handler 
  const auth = getAuth();

  // enable user to sign in anonymously 
  const userSignIn = () => {
    signInAnonymously(auth)
      //get result from promise with temp user data
      .then((result) => {
        navigation.navigate("Chat", {userID: result.user.uid});
        Alert.alert("You signed in successfully");
      })
      .catch((error) => {
        Alert.alert("We could not sign you in. Try again later");
      })
  }

  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  return (
    <View style={{ flex: 1 }}>
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
            <Text
              style={{
                fontSize: 16,
                fontWeight: 300,
                color: "#757083",
                marginBottom: 15,
              }}
            >
              Choose Background Color:
            </Text>
            <View style={styles.colorOptions}>
              <TouchableOpacity
                style={[styles.colorButton, styles.black]}
                onPress={() => setColor("#090C08")}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.colorButton, styles.purple]}
                onPress={() => setColor("#474056")}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.colorButton, styles.blue]}
                onPress={() => setColor("#8A95A5")}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.colorButton, styles.green]}
                onPress={() => setColor("#B9C6AE")}
              ></TouchableOpacity>
            </View>
          </View>
          <Pressable
            // pass name data to Screen2 on screen transition
            onPress={() =>
              navigation.navigate("Chat", { name: name, color: color })
            }
            style={styles.startChattingButton}
          >
            <Text style={{ color: "#FFFFFF" }}>Start Chatting</Text>
          </Pressable>
        </View>
        {/* prevent iOS device keyboards from covering input */}
      </ImageBackground>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
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
    borderRadius: 4,
  },
  header: {
    fontSize: 45,
    fontWeight: 600,
    color: "#FFFFFF",
    top: "-12%",
  },
  input: {
    backgroundColor: "white",
    height: "44%",
    width: "88%",
    top: "22%",
    justifyContent: "space-evenly",
    padding: "5%",
  },
  startChattingButton: {
    fontSize: 16,
    fontWeight: 600,
    backgroundColor: "#757083",
    height: "18%",
    alignItems: "center",
    justifyContent: "center",
  },
  colorOptions: {
    flexDirection: "row",
    marginRight: 5,
    marginBottom: 10,
  },
  colorButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
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
