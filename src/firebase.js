import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjkUO8AT5xdz8hfVd0suLeGJoNGd3PjDc",
  authDomain: "disney-plus-1b03f.firebaseapp.com",
  projectId: "disney-plus-1b03f",
  storageBucket: "disney-plus-1b03f.appspot.com",
  messagingSenderId: "1051702200171",
  appId: "1:1051702200171:web:e96bf73944fb47f800ee2e",
  measurementId: "G-M3MNWMB6KB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
