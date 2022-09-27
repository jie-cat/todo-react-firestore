// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6G2aRf1DSUel6GAz2rigXuPEGWzk4gCg",
  authDomain: "todo-app-f2b97.firebaseapp.com",
  projectId: "todo-app-f2b97",
  storageBucket: "todo-app-f2b97.appspot.com",
  messagingSenderId: "579799667227",
  appId: "1:579799667227:web:5fa3585171e299e03d1ebe",
  measurementId: "G-67WSNZL8G9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
