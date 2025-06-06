// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSNqssPe7-Zf3n7b9vBRIVluDnadSe0kI",
  authDomain: "restauraniud.firebaseapp.com",
  projectId: "restauraniud",
  storageBucket: "restauraniud.firebasestorage.app",
  messagingSenderId: "362578909875",
  appId: "1:362578909875:web:b7519a01ddd8f032d5eec6",
  measurementId: "G-VE0NX3JE8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };