import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
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
});

export default App;
