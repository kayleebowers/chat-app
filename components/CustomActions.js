import { TouchableOpacity, StyleSheet, View, Text, Alert } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import * as ImagePicker from "expo-image-picker";
import * as Location from 'expo-location';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// wrapperStyle and iconTextStyle are default props from Gifted Chat
const CustomActions = ({ wrapperStyle, iconTextStyle, onSend, storage, userID }) => {
  // get reference to GiftedChat's ActionSheet
  const actionSheet = useActionSheet();

  const onActionPress = () => {
    // define items to display in ActionSheet
    const options = ["Choose From Library", "Take Picture", "Send Location", "Cancel"];
    // locate cancel button
    const cancelButtonIndex = options.length - 1;
    actionSheet.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex
      },
      async (buttonIndex) => {
        switch(buttonIndex) {
          case 0: 
            pickImage();
            return;
          case 1:
            takePhoto();
            return;
          case 2:
            getLocation();
          default: 
        }
      }
    )
  };

  // get location data
  const getLocation = async () => {
    let permissions = await Location.requestForegroundPermissionsAsync();
    if (permissions?.granted) {
      const location = await Location.getCurrentPositionAsync({});
      if (location) {
        onSend({
          location: {
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
          }
        });
      } else Alert.alert("Permissions haven't been granted.");
    } else Alert.alert("Error occurred while fetching location");
  }

  // pick image
  const pickImage = async () => {
    // get permission to access photo library
    let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissions?.granted) {
      // let user select photo
      let result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        const imageURI = result.assets[0].uri;
        // generate unique string reference so storage accepts multiple files
        const uniqueRefString = generateReference(imageURI);
        // convert imageURI into blob for Firebase Storage
        const response = await fetch(imageURI);
        const blob = await response.blob();
        // create image reference and upload
        const newUploadRef = ref(storage, uniqueRefString);
        uploadBytes(newUploadRef, blob).then(async (snapshot) => {
          console.log('File has been uploaded successfully');
          // get remote image URL and send in message
          const imageURL = await getDownloadURL(snapshot.ref);
          onSend({ image: imageURL })
        })
      } else Alert.alert("Permissions haven't been granted.");
    }
  }

  // generate unique string reference for each added photo
  const generateReference = (uri) => {
    const timeStamp = (new Date()).getTime();
    const imageName = uri.split("/")[uri.split("/").length - 1];
    return `${userID}-${timeStamp}-${imageName}`;
  }

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
