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
  // apiKey: "AIzaSyC-CcDm3mp0BiBY4HM3e4HBkl9POeFkpBA",
  // authDomain: "fe19tp2cherry.firebaseapp.com",
  // databaseURL: "https://fe19tp2cherry.firebaseio.com",
  // projectId: "fe19tp2cherry",
  // storageBucket: "fe19tp2cherry.appspot.com",
  // messagingSenderId: "73963246117",
  // appId: "1:73963246117:web:637e5993475c5330b3e5cc",
  // measurementId: "G-7EYPWPKBM5"
};

firebase.initializeApp(fireconf)

export {
  firebase
}
