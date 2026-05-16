// firebase.js — WordPath Firebase başlatma

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1dJFS-BePbJUX83_SJjZOVcwcgmrjsl4",
  authDomain: "wordpath-1b568.firebaseapp.com",
  projectId: "wordpath-1b568",
  storageBucket: "wordpath-1b568.firebasestorage.app",
  messagingSenderId: "512512212257",
  appId: "1:512512212257:web:f8c73cfe5de71bbfccd260",
  measurementId: "G-BQNFMNDR24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
