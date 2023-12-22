// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFjfaJ6catT02gUczKJSktmgaFknsXkFA",
    authDomain: "taskmagement-bb997.firebaseapp.com",
    projectId: "taskmagement-bb997",
    storageBucket: "taskmagement-bb997.appspot.com",
    messagingSenderId: "647412313287",
    appId: "1:647412313287:web:8fff66c299dc3cc73322e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;