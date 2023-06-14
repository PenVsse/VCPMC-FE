// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-v3FnCH_TbhkWBjjWhKhxZ7bSSCn0gIc",
  authDomain: "vcpmc---intermediate-d30ab.firebaseapp.com",
  projectId: "vcpmc---intermediate-d30ab",
  storageBucket: "vcpmc---intermediate-d30ab.appspot.com",
  messagingSenderId: "1093554619691",
  appId: "1:1093554619691:web:fabe306517425452f2b16e",
  measurementId: "G-68CLDKTDP1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
