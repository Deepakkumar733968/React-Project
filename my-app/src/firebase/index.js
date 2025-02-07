import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCiggeOMS1M9MCW07ovFxIEtigXvnLjtUE",
  authDomain: "react-firebase-crud-f68a8.firebaseapp.com",
  projectId: "react-firebase-crud-f68a8",
  storageBucket: "react-firebase-crud-f68a8.appspot.com",
  messagingSenderId: "14681214663",
  appId: "1:14681214663:web:b68fb021aacbc1dc2538e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
