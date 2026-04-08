// ========================================
// FIREBASE CONFIGURATION
// Smart Vehicle Service Management System
// ========================================

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    updateProfile,
    onAuthStateChanged,
    sendPasswordResetEmail,
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
import { 
    getStorage, 
    ref, 
    uploadBytes, 
    getDownloadURL,
    deleteObject
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBFuoNfz4LuXrPdhRRmYiYpe1jGKWdr1pY",
    authDomain: "smart-vehicle-manage-system.firebaseapp.com",
    projectId: "smart-vehicle-manage-system",
    storageBucket: "smart-vehicle-manage-system.firebasestorage.app",
    messagingSenderId: "284858789054",
    appId: "1:284858789054:web:74d13ea854831fcd1802ef",
    measurementId: "G-S6JM38PXW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export all Firebase services
export { 
    app, 
    auth, 
    db, 
    storage,
    // Auth functions
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut,
    // Firestore functions
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
    addDoc,
    // Storage functions
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
};
