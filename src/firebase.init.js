// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIL46yEtbjp-cstJ7ENyDpYseFNZ5fTug",
  authDomain: "antora-photography.firebaseapp.com",
  projectId: "antora-photography",
  storageBucket: "antora-photography.appspot.com",
  messagingSenderId: "788675762843",
  appId: "1:788675762843:web:e4048988353e7c7e24443e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;