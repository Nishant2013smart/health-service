import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfdljGtwhw6QkvdvBI6cIZAH5BPqo0I64",
  authDomain: "health-service-br.firebaseapp.com",
  projectId: "health-service-br",
  storageBucket: "health-service-br.firebasestorage.app",
  messagingSenderId: "109315474284",
  appId: "1:109315474284:web:58dd2df9c709b2d79a6949",
  measurementId: "G-1XPLTBQG38",
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = getFirestore(app); // Firestore database instance
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth };
