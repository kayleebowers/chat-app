import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Start from "./components/Start";
import Chat from "./components/Chat";

// create navigator to return object with Navigator and Screen components
const Stack = createNativeStackNavigator();

const App = () => {

  // configure Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDj2n6B8QR6Cw6mt4_9jnY0W6DgFGp0Nl0",
    authDomain: "chat-app-35ebf.firebaseapp.com",
    projectId: "chat-app-35ebf",
    storageBucket: "chat-app-35ebf.appspot.com",
    messagingSenderId: "820030470933",
    appId: "1:820030470933:web:1faf8f6b9706ee6759871c"
  };

  // initialize Firebase
  const app = initializeApp(firebaseConfig);

  // initialize Cloud Firestore
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Chat">
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
