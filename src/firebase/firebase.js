// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1gFSF0eo-wATFk7xXGwDjFfucPq5EKzU",
  authDomain: "web-semana14-l.firebaseapp.com",
  projectId: "web-semana14-l",
  storageBucket: "web-semana14-l.appspot.com",
  messagingSenderId: "648468389591",
  appId: "1:648468389591:web:531cf09e32f34108ed9a92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
