import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT6w2Uwo4U_odQ6N1_yJYoZgomoGNzQOQ",
  authDomain: "publicphotos-92eb9.firebaseapp.com",
  projectId: "publicphotos-92eb9",
  storageBucket: "publicphotos-92eb9.appspot.com",
  messagingSenderId: "348160186977",
  appId: "1:348160186977:web:b6c0dc42f01b204d7da820"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
