
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALMAWupdF6WxxBolWvaYnnaVxbXrcI6hU",
  authDomain: "pithub-a6f81.firebaseapp.com",
  databaseURL: "https://pithub-a6f81-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pithub-a6f81",
  storageBucket: "pithub-a6f81.appspot.com",
  messagingSenderId: "254668699805",
  appId: "1:254668699805:web:19d8f313e4f8783c0cfc74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

