// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFuH5WiCcYKFIhDOVMjbEiBnJBlT9H4hw",
  authDomain: "batch12-10a02.firebaseapp.com",
  databaseURL: "https://batch12-10a02-default-rtdb.firebaseio.com",
  projectId: "batch12-10a02",
  storageBucket: "batch12-10a02.firebasestorage.app",
  messagingSenderId: "715230861064",
  appId: "1:715230861064:web:47f9437d47680c04fc3ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export default app;
export { auth, database };