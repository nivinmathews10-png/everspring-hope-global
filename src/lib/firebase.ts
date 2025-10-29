import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARvrget0xMfhoqxzxCd3VKzW_AL5qcIC4",
  authDomain: "everspring-96b5b.firebaseapp.com",
  projectId: "everspring-96b5b",
  storageBucket: "everspring-96b5b.firebasestorage.app",
  messagingSenderId: "804020867037",
  appId: "1:804020867037:web:4afac101113c94b3de7034",
  measurementId: "G-ZTG5Y4G9NF"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
