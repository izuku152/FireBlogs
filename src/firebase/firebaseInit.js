import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-Ujkx_AMnpBblgTwKOPbfaQclRVFCNq4",
  authDomain: "fireblogs-e16a2.firebaseapp.com",
  projectId: "fireblogs-e16a2",
  storageBucket: "fireblogs-e16a2.appspot.com",
  messagingSenderId: "155768923629",
  appId: "1:155768923629:web:09b01624361576faeff3e4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { timeStamp };
export default firebaseApp.firestore();
