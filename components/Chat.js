import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

const Chat = ({route, navigation}) => {

  // get name and color data from Start component
  const { name } = route.params;
  const {color} = route.params;

  // pass name to navigation title once right after component is mounted
  useEffect(() => {
    navigation.setOptions({title: name});
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text>Hello Screen2</Text>
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
