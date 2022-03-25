// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB_pQE5HvBYb6cudw219_LQGHL19LsfqQ",
  authDomain: "user-portal-e44a2.firebaseapp.com",
  projectId: "user-portal-e44a2",
  storageBucket: "user-portal-e44a2.appspot.com",
  messagingSenderId: "765750661407",
  appId: "1:765750661407:web:f709fec33168679831a02a",
  measurementId: "G-X33H2TRV16"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export default firebaseApp;