import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC5jFfFyTa8zQJQAZdArbnqrk_z9hCtvac",
    authDomain: "mymoney-1a89f.firebaseapp.com",
    projectId: "mymoney-1a89f",
    storageBucket: "mymoney-1a89f.firebasestorage.app",
    messagingSenderId: "853041283237",
    appId: "1:853041283237:web:05c0e72e7779e12c5e0d4c"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()

  export {projectFirestore}