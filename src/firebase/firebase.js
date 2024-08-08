import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAuxXwjnh997XoYSGMEnBdSoHUTl2DPcWE",
  authDomain: "react-auth-486be.firebaseapp.com",
  projectId: "react-auth-486be",
  storageBucket: "react-auth-486be.appspot.com",
  messagingSenderId: "202665313538",
  appId: "1:202665313538:web:9fe3d9df117236f44fee1b",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to local storage successfully");
  })
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });
