// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPoBNx0ObRyc74vtwfJ2r0GUbi6raGuUs",
  authDomain: "vocab-learning-a0e56.firebaseapp.com",
  projectId: "vocab-learning-a0e56",
  storageBucket: "vocab-learning-a0e56.firebasestorage.app",
  messagingSenderId: "1045395403743",
  appId: "1:1045395403743:web:5f872c1a8673bda2408a6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;
