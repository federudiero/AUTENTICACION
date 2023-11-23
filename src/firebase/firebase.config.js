// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkMtQgKfhHEbWBht7WSHiwuthu6o-mlEk",
  authDomain: "fb-tp-c25e8.firebaseapp.com",
  projectId: "fb-tp-c25e8",
  storageBucket: "fb-tp-c25e8.appspot.com",
  messagingSenderId: "214647814366",
  appId: "1:214647814366:web:8e5a275bf644c0f032aa4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)