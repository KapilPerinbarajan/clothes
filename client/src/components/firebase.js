// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRhvnRGhUKYk-7q6ywunKHjML46WjufZs",
  authDomain: "clothing-website-63005.firebaseapp.com",
  projectId: "clothing-website-63005",
  storageBucket: "clothing-website-63005.firebasestorage.app",
  messagingSenderId: "1060483353073",
  appId: "1:1060483353073:web:2e410628c75e301749dc50",
  measurementId: "G-NHK3XFDZKQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const getFirestoreInstance = () => db;