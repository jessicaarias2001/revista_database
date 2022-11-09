// import firebase from "firebase/app";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
firebase.initializeApp( {
  apiKey: "AIzaSyANFDvKw5Tth8zEYlHF6Af4JYZL3vkjJFA",
  authDomain: "revista-database.firebaseapp.com",
  projectId: "revista-database",
  storageBucket: "revista-database.appspot.com",
  messagingSenderId: "822414243638",
  appId: "1:822414243638:web:5195e04e1526659a732597"
});

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();
