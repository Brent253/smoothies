  // Your web app's Firebase configuration
  import firebase from 'firebase';
  import firestore from 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyDyxwN_cDzjj1Ys4qAdY4rggm2Su-14ei4",
    authDomain: "smoothies-411ed.firebaseapp.com",
    databaseURL: "https://smoothies-411ed.firebaseio.com",
    projectId: "smoothies-411ed",
    storageBucket: "smoothies-411ed.appspot.com",
    messagingSenderId: "682157380716",
    appId: "1:682157380716:web:9ca71e12cd88fc82fa7449",
    measurementId: "G-DDL3BP3K2H"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //analytics
  firebaseApp.analytics();

  //firestore
  export default firebaseApp.firestore();

