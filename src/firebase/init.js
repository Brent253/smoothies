// Your web app's Firebase configuration
import firebase from "firebase";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBSxvn4dVHJZfcc_Ey5Vu9KFIlsnubVMAI",
  authDomain: "smoothies-d8847.firebaseapp.com",
  projectId: "smoothies-d8847",
  storageBucket: "smoothies-d8847.appspot.com",
  messagingSenderId: "370645377240",
  appId: "1:370645377240:web:aa5bee00652dbdc53637ad",
  measurementId: "G-42RHPEDY5V",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//analytics
firebaseApp.analytics();

//firestore
export default firebaseApp.firestore();
