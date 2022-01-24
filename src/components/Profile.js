import React from 'react';
import '../App.css';
import imgprofile from '../IMAGES/imgone.jpg'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';



function profile(){
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid)
   getDocs(collection(db, "users")).where("firstnameRef", "==", "stan").then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });
  } else {
    // User is signed out
    // ...
  }
});
    return(
        <div className="dasha">
            <img className='profimg' src={imgprofile} />
            <p>Name</p>
            <p>Email</p>
            <p>User ID</p>
            <p>Department</p>
            <p>Country of origin</p>
            <p>Home address</p>
            <p>LinkedIn</p>
        </div>
    )
}


export default profile