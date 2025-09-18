import { auth } from "../firebase/firebaseConfig";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";


export const registerUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
    return signOut(auth);
};

export const authStateListener = (callback) => {
    return onAuthStateChanged(auth, callback);
  };