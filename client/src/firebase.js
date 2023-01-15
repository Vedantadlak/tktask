// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2R_Y2lW5KL-Mb24CxhfScAdGO1P5ZNMA",
    authDomain: "tktk-3a870.firebaseapp.com",
    projectId: "tktk-3a870",
    storageBucket: "tktk-3a870.appspot.com",
    messagingSenderId: "406906740343",
    appId: "1:406906740343:web:2d59ae8e5f69a245223072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };;