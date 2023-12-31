import { Alert, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import Start from "./components/Start";
import Chat from "./components/Chat";
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { getStorage } from "firebase/storage";

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

  // initialize Firebase and Firebase Storage handlers
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  // initialize Cloud Firestore
  const db = getFirestore(app);

  // define state for connection status 
  const connectionStatus = useNetInfo();

  // disable Firestore without connection and vice versa
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Chat">
          {props => <Chat db={db} isConnected={connectionStatus.isConnected} storage={storage} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
