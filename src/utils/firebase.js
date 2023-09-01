// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlsqGjWvGmYp04jf95KHFO2lwSzXAxOoE",
    authDomain: "netflixgtp-792be.firebaseapp.com",
    projectId: "netflixgtp-792be",
    storageBucket: "netflixgtp-792be.appspot.com",
    messagingSenderId: "615878164108",
    appId: "1:615878164108:web:ebb71d28f444d30f6185a9",
    measurementId: "G-M7CMK45BVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();