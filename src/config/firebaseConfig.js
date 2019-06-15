import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAwMoQzIe2eEQ_03fnAiCNToo4TegC854Q",
    authDomain: "book-diversity.firebaseapp.com",
    databaseURL: "https://book-diversity.firebaseio.com",
    projectId: "book-diversity",
    storageBucket: "book-diversity.appspot.com",
    messagingSenderId: "130399979688",
    appId: "1:130399979688:web:5b7a5b996cab015c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
