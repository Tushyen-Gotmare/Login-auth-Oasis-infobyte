
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4VGXqZjU_d2GR9gUytCAcBvJmS9dOZOA",
  authDomain: "kissanpeak.firebaseapp.com",
  projectId: "kissanpeak",
  storageBucket: "kissanpeak.appspot.com",
  messagingSenderId: "1002359599875",
  appId: "1:1002359599875:web:cb96b9d2f0b888b9442f36",
  measurementId: "G-YR5E8V84WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();

export const doPasswordReset = email => auth.sendPasswordResetEmail(email);
export {app, auth};

