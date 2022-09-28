// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2hgEAsg7qB1a8fa9PaijgYJIxUN8wx2g",
  authDomain: "nexusbrorental-ecommerce.firebaseapp.com",
  projectId: "nexusbrorental-ecommerce",
  storageBucket: "nexusbrorental-ecommerce.appspot.com",
  messagingSenderId: "828535267233",
  appId: "1:828535267233:web:845af682e7a42ad1bcf5e0",
  measurementId: "G-Z9Q5R6FXVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);