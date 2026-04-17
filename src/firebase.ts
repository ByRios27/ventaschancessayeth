import { getApps, initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  setDoc,
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  serverTimestamp, 
  doc, 
  getDoc,
  updateDoc, 
  deleteDoc,
  getDocs,
  writeBatch,
  getDocFromServer,
  limit,
  increment,
  runTransaction
} from "firebase/firestore";
import { 
  getAuth, 
  GoogleAuthProvider,
  browserLocalPersistence,
  inMemoryPersistence,
  initializeAuth,
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut, 
  updatePassword
} from "firebase/auth";

import firebaseConfig from '../firebase-applet-config.json';

const app = getApps().find(existingApp => existingApp.name === '[DEFAULT]')
  ?? initializeApp(firebaseConfig);
const secondaryApp = getApps().find(existingApp => existingApp.name === 'secondary')
  ?? initializeApp(firebaseConfig, 'secondary');
export const db = getFirestore(app);
export const auth = (() => {
  try {
    return initializeAuth(app, {
      persistence: browserLocalPersistence,
    });
  } catch {
    return getAuth(app);
  }
})();
export const googleProvider = new GoogleAuthProvider();
export const secondaryAuth = (() => {
  try {
    return initializeAuth(secondaryApp, {
      persistence: inMemoryPersistence,
    });
  } catch {
    return getAuth(secondaryApp);
  }
})();

export {
  collection, 
  addDoc, 
  setDoc,
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  serverTimestamp, 
  doc, 
  getDoc,
  updateDoc, 
  deleteDoc,
  getDocs,
  writeBatch,
  getDocFromServer,
  limit,
  increment,
  runTransaction,
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut, 
  updatePassword
};
