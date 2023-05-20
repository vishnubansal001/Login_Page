// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGZK7JplyYXT8-cUsikeupUOBFuQUjwvo",
  authDomain: "otp-login-4c3c2.firebaseapp.com",
  projectId: "otp-login-4c3c2",
  storageBucket: "otp-login-4c3c2.appspot.com",
  messagingSenderId: "9666331082",
  appId: "1:9666331082:web:a11892f09b437a2d2bcf33",
  measurementId: "G-SBV981WLQC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
