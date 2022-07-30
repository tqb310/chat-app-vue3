import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAckNtonObKKjAVx1HsYLROT9gH_brpjlA",
  authDomain: "project-demo-18310.firebaseapp.com",
  databaseURL: "https://project-demo-18310.firebaseio.com",
  projectId: "project-demo-18310",
  storageBucket: "project-demo-18310.appspot.com",
  messagingSenderId: "764104046491",
  appId: "1:764104046491:web:5f49885603c7bb7c6c133e",
  measurementId: "G-P8EZZXZTNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export default app;
export { auth, firestore };
