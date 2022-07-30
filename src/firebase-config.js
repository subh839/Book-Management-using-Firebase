// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYvvWpqMIFqgeyEJu_akdIuegt2rM6tno",
  authDomain: "book-store-d064c.firebaseapp.com",
  projectId: "book-store-d064c",
  storageBucket: "book-store-d064c.appspot.com",
  messagingSenderId: "475454001768",
  appId: "1:475454001768:web:1b04b7b1f986491ef9e1dd",
  measurementId: "G-EXRZPCT6RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);

