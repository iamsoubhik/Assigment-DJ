import firebase from 'firebase';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBFlsLWehqYrelVMhDv6hnV6kXoQ_d2bN4",
    authDomain: "daily-routine-c95e2.firebaseapp.com",
    projectId: "daily-routine-c95e2",
    storageBucket: "daily-routine-c95e2.appspot.com",
    messagingSenderId: "813300659079",
    appId: "1:813300659079:web:e9fb37d49aef501b2ed922",
    measurementId: "G-EPSSZFJE3L"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;