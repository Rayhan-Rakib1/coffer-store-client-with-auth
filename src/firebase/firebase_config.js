// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiXxfx_2ab-qSDmIXTQClHAjI9QE0LuYg",
  authDomain: "vocabulary-learning-76e53.firebaseapp.com",
  projectId: "vocabulary-learning-76e53",
  storageBucket: "vocabulary-learning-76e53.firebasestorage.app",
  messagingSenderId: "131478425292",
  appId: "1:131478425292:web:32e355b523d6e8522c7c69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)