const firebase = require("firebase");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHfeiGb-qLY4CgkKtrGV9plcWcPj2VBQQ",
  authDomain: "jrcrm-4f580.firebaseapp.com",
  databaseURL: "https://jrcrm-4f580-default-rtdb.firebaseio.com",
  projectId: "jrcrm-4f580",
  storageBucket: "jrcrm-4f580.appspot.com",
  messagingSenderId: "482749695187",
  appId: "1:482749695187:web:7a15babbc145e16c36c026",
  measurementId: "G-1DG924Y1CR"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Tasks");
module.exports = User;
