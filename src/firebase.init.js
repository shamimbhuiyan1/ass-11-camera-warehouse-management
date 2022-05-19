// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtQhsvP3lO-GtMgRp6uz0SESM_u9zAc7o",
  authDomain: "online-camera-warehouse.firebaseapp.com",
  projectId: "online-camera-warehouse",
  storageBucket: "online-camera-warehouse.appspot.com",
  messagingSenderId: "276690393008",
  appId: "1:276690393008:web:1c6e604f10d42e81f86875",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
