import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.blue}>Hello World!</Text>
      <Text style={styles.bigRed}>How are you?</Text>
      <Text style={[styles.blue, styles.bigRed]}>I'm feeling blue.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: "blue",
    fontWeight: "600"
  }, 
  bigRed: {
    color: "red",
    fontSize: 30,
  },
});

export default App;
