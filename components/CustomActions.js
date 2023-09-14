import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

// wrapperStyle and iconTextStyle are default props from Gifted Chat
const CustomActions = ({ wrapperStyle, iconTextStyle }) => {
  const onActionPress = () => {
    // define items to display in ActionSheet
    const options = ["Choose From Library", "Take Picture", "Send Location", "Cancel"];
    const cancelButtonIndex = options.length - 1;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onActionPress}>
      <View style={[styles.wrapper, wrapperStyle]}>
        <Text style={[styles.iconText, iconTextStyle]}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomActions;

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: "#b2b2b2",
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: "#b2b2b2",
    fontWeight: "bold",
    fontSize: 10,
    backgroundColor: "transparent",
    textAlign: "center",
  },
});
