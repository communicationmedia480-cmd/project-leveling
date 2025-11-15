// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATBGGp3GgltXxKzX4ndE_gEF3wQ2Ap4zk",
  authDomain: "niggasleveling.firebaseapp.com",
  projectId: "niggasleveling",
  storageBucket: "niggasleveling.firebasestorage.app",
  messagingSenderId: "116721108987",
  appId: "1:116721108987:web:1fb216abc1941d9a8b2d5e",
  measurementId: "G-L858Y575ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
