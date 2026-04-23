// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY, 
  authDomain: "loginaiecommerce.firebaseapp.com",
  projectId: "loginaiecommerce",
  storageBucket: "loginaiecommerce.firebasestorage.app",
  messagingSenderId: "100037879196",
  appId: "1:100037879196:web:afaaeb00fe20c79f7c5459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
