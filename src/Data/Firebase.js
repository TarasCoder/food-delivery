import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSZzEzFIkJbR4DVRKQ8ZPC61OgqC29P4c",
  authDomain: "cart-project-5abcb.firebaseapp.com",
  databaseURL:
    "https://cart-project-5abcb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cart-project-5abcb",
  storageBucket: "cart-project-5abcb.appspot.com",
  messagingSenderId: "712240912602",
  appId: "1:712240912602:web:a563090d3a7c12f2576de3",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, collection, addDoc, getDocs };