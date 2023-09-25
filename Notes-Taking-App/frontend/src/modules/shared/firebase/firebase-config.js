// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFi_kAZVoeiZRdTYXC_4ZlypEf2MGrAxQ",
  authDomain: "oauthapp-54fd7.firebaseapp.com",
  projectId: "oauthapp-54fd7",
  storageBucket: "oauthapp-54fd7.appspot.com",
  messagingSenderId: "1040474152278",
  appId: "1:1040474152278:web:3254ebe1d4ecb6bcac0af7",
  measurementId: "G-4RNN8T8DWR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);