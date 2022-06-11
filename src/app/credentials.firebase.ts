import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsXnkCzvYP3znHiWPPkSdSC_D50AqsJNo",
  authDomain: "control-clientes-d73fa.firebaseapp.com",
  projectId: "control-clientes-d73fa",
  storageBucket: "control-clientes-d73fa.appspot.com",
  messagingSenderId: "711924539468",
  appId: "1:711924539468:web:2522fdf623bbc9e10514e9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
