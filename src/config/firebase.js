import * as firebase from "firebase/app";
import 'firebase/auth';

const fireconf = {
  apiKey: "AIzaSyC-CcDm3mp0BiBY4HM3e4HBkl9POeFkpBA",
  authDomain: "fe19tp2cherry.firebaseapp.com",
  databaseURL: "https://fe19tp2cherry.firebaseio.com",
  projectId: "fe19tp2cherry",
  storageBucket: "fe19tp2cherry.appspot.com",
  messagingSenderId: "73963246117",
  appId: "1:73963246117:web:637e5993475c5330b3e5cc",
  measurementId: "G-7EYPWPKBM5"
};

firebase.initializeApp(fireconf)

export default firebase
