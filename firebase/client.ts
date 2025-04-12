import { getApps, initializeApp, getApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAPGQsuJ9YoCOJ8z1GeC0tRYnEZHVLmnlM",
  authDomain: "prepwise-18b0c.firebaseapp.com",
  projectId: "prepwise-18b0c",
  storageBucket: "prepwise-18b0c.firebasestorage.app",
  messagingSenderId: "55933609912",
  appId: "1:55933609912:web:9365b74ef2624d978d914d",
  measurementId: "G-54MC278W03"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)