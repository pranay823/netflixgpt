// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYTCI1bbyzSDJACN3yJO4vRxBjkDXGA_A",
  authDomain: "netflix-gpt-978ea.firebaseapp.com",
  projectId: "netflix-gpt-978ea",
  storageBucket: "netflix-gpt-978ea.appspot.com",
  messagingSenderId: "98470988536",
  appId: "1:98470988536:web:7f07dee3552a472cc8490d",
  measurementId: "G-3L08C0E31S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();