import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAg0JBAY2RJurcKYtUpxuChg6LylswvLsE",
    authDomain: "sdc-website-38500.firebaseapp.com",
    databaseURL: "https://sdc-website-38500-default-rtdb.firebaseio.com",
    projectId: "sdc-website-38500",
    storageBucket: "sdc-website-38500.appspot.com",
    messagingSenderId: "410522942042",
    appId: "1:410522942042:web:0c5fb55237c2d8734c7663",
    measurementId: "G-ZTCB9J11PQ"
    // apiKey: process.env.FIREBASE_APIKEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.FIREBASE_DATABASE_URL,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export database
export const database = getFirestore(app);

// Export Storage
export const storage = getStorage(app);