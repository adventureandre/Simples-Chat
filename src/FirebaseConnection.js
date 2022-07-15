import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBC_gfJ-R3ee9yAcE2jupYAN9_Cf8RpaYg",
    authDomain: "advapp-457b7.firebaseapp.com",
    databaseURL: "https://advapp-457b7.firebaseio.com",
    projectId: "advapp-457b7",
    storageBucket: "advapp-457b7.appspot.com",
    messagingSenderId: "960828328700",
    appId: "1:960828328700:web:f95c91f3ce47d41e8f2579"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;