
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// ADD YOUR OWN FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyC7oiy-i1gNWk9ISPmJdtLco3WcSkUp32k",
  authDomain: "phishing-url-1b4f7.firebaseapp.com",
  projectId: "phishing-url-1b4f7",
  storageBucket: "phishing-url-1b4f7.appspot.com",
  messagingSenderId: "11625651560",
  appId: "1:11625651560:web:c51fd2afd9153499e70add"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore
export const db = getFirestore(firebaseApp);
export { auth, googleAuthProvider };
