export const environment = {
  production: true
};

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChIGNmGFToSX0_5ra-zVJgiS0C-HtHxbo",
  authDomain: "hrms-ffd07.firebaseapp.com",
  projectId: "hrms-ffd07",
  storageBucket: "hrms-ffd07.appspot.com",
  messagingSenderId: "801666859493",
  appId: "1:801666859493:web:8b569b57f7f0a7aa846f0c",
  measurementId: "G-T70QY6Q1Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
