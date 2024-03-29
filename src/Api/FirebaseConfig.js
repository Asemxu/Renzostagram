import firebase from "firebase/app";
import 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain ,
  projectId: process.env.projectId ,
  storageBucket:  process.env.storageBucket,
  messagingSenderId:  process.env.messagingSenderId,
  appId:  process.env.appId,
  measurementId:  process.env.measurementIdt
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export  default app;