import { StyleSheet, Text, View, Button } from "react-native";

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello Screen1</Text>
      <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate("Screen2")}
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
});

export default Screen1;