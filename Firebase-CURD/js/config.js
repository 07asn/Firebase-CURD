// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEoeq63Aq4IZ4tzAiOLCygYA0ymZDzBL8",
    authDomain: "users-70538.firebaseapp.com",
    databaseURL: "https://users-70538-default-rtdb.firebaseio.com",
    projectId: "users-70538",
    storageBucket: "users-70538.firebasestorage.app",
    messagingSenderId: "378704876974",
    appId: "1:378704876974:web:7d0cb193160108d471643f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };