// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Z4DUTObFx09x9Ynd2949K12irHuH16A",
  authDomain: "saputragrubindonesia.firebaseapp.com",
  projectId: "saputragrubindonesia",
  storageBucket: "saputragrubindonesia.appspot.com",
  messagingSenderId: "957934386411",
  appId: "1:957934386411:web:8c656158ceb9978b7a92ae",
  measurementId: "G-2Z9VVHM36Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);