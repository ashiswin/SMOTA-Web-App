import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7z9dFGSqoDQriDqtvZJdpVKjkAzvwemg",
  authDomain: "smota-web-app.firebaseapp.com",
  projectId: "smota-web-app",
  storageBucket: "smota-web-app.appspot.com",
  messagingSenderId: "1097729737204",
  appId: "1:1097729737204:web:b4be1f36fd024f79f539a1",
  measurementId: "G-FRXT2TMXF2"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();