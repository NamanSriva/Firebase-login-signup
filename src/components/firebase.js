// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3A86Ox8WlXL9cGnXcRBcVqDxESQfYHr0",
  authDomain: "login-reg-28148.firebaseapp.com",
  projectId: "login-reg-28148",
  storageBucket: "login-reg-28148.appspot.com",
  messagingSenderId: "237397450572",
  appId: "1:237397450572:web:e0a6c023dc39ae011db9e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db=getFirestore(app);
export default app;