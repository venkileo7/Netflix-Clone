// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUbsiMa8jInvLmBHgPEBdSQyBwovmN3Ck",
  authDomain: "netflix-clone-9e347.firebaseapp.com",
  projectId: "netflix-clone-9e347",
  storageBucket: "netflix-clone-9e347.firebasestorage.app",
  messagingSenderId: "1061367290608",
  appId: "1:1061367290608:web:9ece0c6f3ab4f5a44f4035",
  measurementId: "G-3RVHSKDTN6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (username, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      username,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logOut = () => {
  signOut(auth);
};

export { auth, db, logIn, signUp, logOut };
