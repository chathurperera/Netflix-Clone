import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDHZ93lqcfp3y3C_HhFLFRxSx5HR07w47Y",
  authDomain: "netflix-bd7af.firebaseapp.com",
  projectId: "netflix-bd7af",
  storageBucket: "netflix-bd7af.appspot.com",
  messagingSenderId: "1044267053851",
  appId: "1:1044267053851:web:0527eadc51363cb7aed9be"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;