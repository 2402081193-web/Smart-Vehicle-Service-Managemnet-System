// ========================================
// FIREBASE CONFIGURATION
// SMART VEHICLE SERVICE MANAGEMENT SYSTEM
// ========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    updateProfile,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    getDocs,
    collection, 
    query, 
    where, 
    orderBy, 
    limit,
    updateDoc,
    deleteDoc,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBFuoNfz4LuXrPdhRRmYiYpe1jGKWdr1pY",
    authDomain: "smart-vehicle-manage-system.firebaseapp.com",
    projectId: "smart-vehicle-manage-system",
    storageBucket: "smart-vehicle-manage-system.firebasestorage.app",
    messagingSenderId: "284858789054",
    appId: "1:284858789054:web:74d13ea854831fcd1802ef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
    app, auth, db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    doc, setDoc, getDoc, getDocs,
    collection, query, where, orderBy, limit,
    updateDoc, deleteDoc, addDoc
};
