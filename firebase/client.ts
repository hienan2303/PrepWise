import { getApps, initializeApp, getApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3W3z9uDEmGrmmXCBzLgvTEohSY7RR5M8",
  authDomain: "ai-interview-fbd95.firebaseapp.com",
  projectId: "ai-interview-fbd95",
  storageBucket: "ai-interview-fbd95.firebasestorage.app",
  messagingSenderId: "218027009009",
  appId: "1:218027009009:web:2689b30d53ef11cc195a50",
  measurementId: "G-FMR06YS8B1"
};
// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)

