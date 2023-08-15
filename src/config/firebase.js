// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBIZ5cfuxtrpfU5ka7y6ffi2wVGT2r7Ik",
  authDomain: "miguelon-c6952.firebaseapp.com",
  projectId: "miguelon-c6952",
  storageBucket: "miguelon-c6952.appspot.com",
  messagingSenderId: "321736279707",
  appId: "1:321736279707:web:e98f936b2053059785283e",
  measurementId: "G-5B4BTVV6Q5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)