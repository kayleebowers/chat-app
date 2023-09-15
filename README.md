# chat-app

## Project Description
Let's Chat is a mobile application built using React Native and the Gifted Chat library and developed with Expo. It provides users with a chat interface and options to share images, take and store new photos, and share their location. The project's messages are stored in a Google Firestore Database, while the images are stored in Firebase Cloud Storage, enabling Let's Chat users to use functionalities both online and offline. The app is styled according to the given screen design.

### Key Features
* A page where users can enter their name and choose a background color for the chat screen before joining the chat
* A page displaying the conversation, as well as an input field and submit button
* Users can send and images
* Users can send their current location data
* Location data is displayed in a map
* Chats are stored and visible online and offline
* Users are authenticated anonymously via Google Firebase authentication

## Get The Project Running
Let's Chat can be downloaded locally and started with `npm start` or `expo start`. The project does rely on Firebase and uses Expo and Android/iOS simulators for development. See further instructions on setting up those resources below.

### Setting up Expo 
Visit the [Expo website]("https://expo.dev/") and create an account. Download the Expo app on your phone, login, and test directly from there by selecting "i" for an iOS device and "a" for an Android device after running `npm start`. 

### Setting up Firebase
Create your own [Firebase]("https://firebase.google.com/") account and navigate to the console. Add a project with your app name and click on "Build" following by "Firestore Database." Set up your database in production mode and enable read/write functionalities in the rules section by changing `allow read, write: if false;` to true. Publish the changes, and head to project's the general settings. Under "Your apps," select webapp (</>) and follow the prompts.

Copy the section of code starting with `const firebaseConfig =` and paste it into your application (see `App.js` for an example).

### Setting up a device emulator
#### Android Studio
Download Android Studio Giraffe from the [Android website]("https://developer.android.com/studio") and follow the installation process. Then set up and install the device you would prefer to use for testing.

#### iOS Emulator
Download and install Xcode before installing the iOS Simulator. From there, you can open a virtual iOS device and view your project by clicking `i` when Expo is running in your terminal. 

## Technologies Used
* React Native
* Firebase
* Expo
* Cloud Firestore
* Firebase Storage
* React Navigation
* Expo ImagePicker API
* Expo Location API
* Gifted Chat
* React Native Maps

## Screenshots
### Welcome Screen
[![Homesrceen.png](https://i.postimg.cc/SKDd1HdF/Homesrceen.png)](https://postimg.cc/674CyjFY)
### Chat Screen
[![Other-color-chat.png](https://i.postimg.cc/JnFqMJSp/Other-color-chat.png)](https://postimg.cc/njv71sFm)
### Screen Color Change
[![Chat-screen.png](https://i.postimg.cc/rzXNtTVW/Chat-screen.png)](https://postimg.cc/rRjrvvtF)
### Cloud Firestore (message storage)
[![Cloud-Firestore.png](https://i.postimg.cc/DwcRFj65/Cloud-Firestore.png)](https://postimg.cc/LJnx3VrZ)
### Firebase Storage (photo file storage)
[![Firebase-Storage.png](https://i.postimg.cc/ZqK2q8Dm/Firebase-Storage.png)](https://postimg.cc/nXg0RDJS)
