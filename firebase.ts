// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolio-270d7.firebaseapp.com",
  projectId: "portfolio-270d7",
  storageBucket: "portfolio-270d7.firebasestorage.app",
  messagingSenderId: "581932822172",
  appId: "1:581932822172:web:a1dee4d6b6b14f51e20759",
  measurementId: "G-YN5GD828VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);