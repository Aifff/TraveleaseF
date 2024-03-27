import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_grvBD4ADyUlWwhVv_-Kd3oc9vKGGqno",
  authDomain: "travelease-6a7a1.firebaseapp.com",
  projectId: "travelease-6a7a1",
  storageBucket: "travelease-6a7a1.appspot.com",
  messagingSenderId: "1032042912902",
  appId: "1:1032042912902:web:a41f845ca00803a4c8c507",
  measurementId: "G-HK2W6XFBD2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();