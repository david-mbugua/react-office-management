import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAUxZR5DrajWXoNBHKcUKuCIHqvJOrlfSI",
    authDomain: "office-management-82d20.firebaseapp.com",
    projectId: "office-management-82d20",
    storageBucket: "office-management-82d20.appspot.com",
    messagingSenderId: "621501746805",
    appId: "1:621501746805:web:64c9bc7544dbd793ab323c",
    measurementId: "G-QWBFQMK82G"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

  export {app};
  export {analytics};
  export {db}

