import firebase from "firebase/app";
import "firebase/firestore";

// Firebase configuration
const config = {
  apiKey: "AIzaSyAwMoQzIe2eEQ_03fnAiCNToo4TegC854Q",
  authDomain: "book-diversity.firebaseapp.com",
  databaseURL: "https://book-diversity.firebaseio.com",
  projectId: "book-diversity",
  storageBucket: "book-diversity.appspot.com",
  messagingSenderId: "130399979688",
  appId: "1:130399979688:web:5b7a5b996cab015c"
};

let fb = firebase.initializeApp(config);

export default firebase; 
