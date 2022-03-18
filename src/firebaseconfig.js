// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGJrlmMD7mz19_uCyZY8CNtO8y0V-Ap0s",
  authDomain: "journal-f83aa.firebaseapp.com",
  projectId: "journal-f83aa",
  storageBucket: "journal-f83aa.appspot.com",
  messagingSenderId: "960190484251",
  appId: "1:960190484251:web:bde31131b103538ca38dbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db};