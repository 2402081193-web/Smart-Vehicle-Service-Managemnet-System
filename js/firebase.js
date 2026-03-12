// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

// Your Firebase configuration
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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export for use in other files
export { app, analytics, auth, db, storage };
