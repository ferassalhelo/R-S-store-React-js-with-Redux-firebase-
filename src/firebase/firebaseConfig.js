import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAf4sye2DDCSh623z-B4moPlkm8iYJGSe4",
  authDomain: "rs-store-93304.firebaseapp.com",
  projectId: "rs-store-93304",
  storageBucket: "rs-store-93304.appspot.com",
  messagingSenderId: "692586824576",
  appId: "1:692586824576:web:6456cb37702919443ef765",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

// init Storage
export const storage = getStorage(firebaseApp);

// init firestore8
export const db = getFirestore(firebaseApp);
