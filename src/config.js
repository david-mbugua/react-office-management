import  {firebase}  from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAUxZR5DrajWXoNBHKcUKuCIHqvJOrlfSI",
    authDomain: "office-management-82d20.firebaseapp.com",
    projectId: "office-management-82d20",
    storageBucket: "office-management-82d20.appspot.com",
    messagingSenderId: "621501746805",
    appId: "1:621501746805:web:64c9bc7544dbd793ab323c",
    measurementId: "G-QWBFQMK82G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db;