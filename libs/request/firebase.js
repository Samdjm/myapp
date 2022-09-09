// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk0qVcPtq0iDk6yjpy_V7Tl8BuOMYGrak",
  authDomain: "app0509.firebaseapp.com",
  projectId: "app0509",
  storageBucket: "app0509.appspot.com",
  messagingSenderId: "508953617616",
  appId: "1:508953617616:web:8d5c58fd0ef353a8242ad5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
