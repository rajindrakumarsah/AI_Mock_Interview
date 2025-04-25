// firebase/client.ts

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLXC2IOjHgZLnLgWgYNyLZaQL5dT1sPl4",
  authDomain: "prepinterviewise.firebaseapp.com",
  projectId: "prepinterviewise",
  storageBucket: "prepinterviewise.appspot.com", // ❗ corrected the domain
  messagingSenderId: "207695497090",
  appId: "1:207695497090:web:0275aecb80cc2992a5319b",
  measurementId: "G-NF7MEBJ85C"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
