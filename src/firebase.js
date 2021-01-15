import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxaH9Dl0nk4Pmq142JPd5dsh0JyOmhluw",
  authDomain: "linkedin-clone-624c1.firebaseapp.com",
  projectId: "linkedin-clone-624c1",
  storageBucket: "linkedin-clone-624c1.appspot.com",
  messagingSenderId: "398355898522",
  appId: "1:398355898522:web:e043683e4b0bb78484bf23",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
