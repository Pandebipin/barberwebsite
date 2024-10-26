import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// console.log(import.meta.env.VITE_FIREBASE_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "barbershop-1014a.firebaseapp.com",
  projectId: "barbershop-1014a",
  storageBucket: "barbershop-1014a.appspot.com",
  messagingSenderId: "638774594308",
  appId: "1:638774594308:web:b3ae10a5a71e2fa4325e51",
  measurementId: "G-2K4MBLTDL0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
