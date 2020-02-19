import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fireconf = {
  apiKey: "AIzaSyBNzcYSrie_0xAVQD1fgVNepCHTAUeVBkQ",
  authDomain: "cherry-fc2b8.firebaseapp.com",
  databaseURL: "https://cherry-fc2b8.firebaseio.com",
  projectId: "cherry-fc2b8",
  storageBucket: "cherry-fc2b8.appspot.com",
  messagingSenderId: "983217516666",
  appId: "1:983217516666:web:dd697cd6277bb136898bc3",
  measurementId: "G-FVVGB6XQTN"
};

firebase.initializeApp(fireconf)

var firebaseEmployeeCreationInstance = firebase.initializeApp(fireconf, "CreateEmployee");


export {
  firebase,
  firebaseEmployeeCreationInstance
}
