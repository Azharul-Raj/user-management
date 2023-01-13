// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:"AIzaSyDvWD-15xJaI5xthH9MQrW3leml6glPag4",
  // authDomain:"user-infos.firebaseapp.com",
  // projectId:"user-infos",
  // storageBucket:"user-infos.appspot.com",
  // messagingSenderId:"757494135980",
  // appId: "1:757494135980:web:bfb9582e9810255f96f309",
  // second
  apiKey:import.meta.env.VITE_REACT_APP_apiKey,
  authDomain:import.meta.env.VITE_REACT_APP_authDomain,
  projectId:import.meta.env.VITE_REACT_APP_projectId,
  storageBucket:import.meta.env.VITE_REACT_APP_storageBucket,
  messagingSenderId:import.meta.env.VITE_REACT_APP_messagingSenderId,
  appId:import.meta.env.VITE_REACT_APP_appId,
};
console.log(import.meta.env.REACT_APP_apiKey)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth()