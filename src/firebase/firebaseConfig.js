import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvHBACBuqlJ-WqQD_1mMq_xn6aAW8HTu0",
  authDomain: "graduation-project-4e9c9.firebaseapp.com",
  projectId: "graduation-project-4e9c9",
  storageBucket: "graduation-project-4e9c9.appspot.com",
  messagingSenderId: "420419439540",
  appId: "1:420419439540:web:477afd92c4a488dca580e1",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

// init Storage
export const storage = getStorage(firebaseApp);

// init firestore8
export const db = getFirestore(firebaseApp);
