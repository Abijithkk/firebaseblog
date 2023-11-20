import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWOUfrqEpSlbEoEzSUyrmI0QohEpASTIM",
    authDomain: "react-blog-4a49b.firebaseapp.com",
    projectId: "react-blog-4a49b",
    storageBucket: "react-blog-4a49b.appspot.com",
    messagingSenderId: "202587820060",
    appId: "1:202587820060:web:30827a7b4d95cc682f8fd9"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };