import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxp4j6B9ToEUgUdTABS88mCdlasW5p5vQ",
  authDomain: "journal-fc869.firebaseapp.com",
  projectId: "journal-fc869",
  storageBucket: "journal-fc869.appspot.com",
  messagingSenderId: "607661594698",
  appId: "1:607661594698:web:92a356eaa9fb3134522eb3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
  db,
  googleAuthProvider
}
