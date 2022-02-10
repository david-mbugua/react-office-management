import React from 'react';
import '../App.css';
//import imgprofile from '../IMAGES/imgone.jpg'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {db} from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import { doc, updateDoc } from "firebase/firestore";





function profile(){
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid)
    const q = query(collection(db, "users"), where("userId", "==", uid));

   getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const userName = doc.data().firstnameRef;
            const userNames = doc.data().secondnameRef;
            const email = doc.data().emailRef;
            const jobID = doc.data().idRef;
            const dept = doc.data().depRef;
            console.log(userName)
            document.getElementById("userName").innerText = userName;
            document.getElementById("email").innerText = email;
            document.getElementById("jobID").innerText = jobID;
            document.getElementById("dept").innerText = dept;

            document.getElementById("editName").value=userName;
            document.getElementById("editId").value= jobID;
            document.getElementById("editDept").value=dept;
            
        });
    });
    


    
  } else {
    // User is signed out
    // ...
  }
 
  
});
function Submit(){
  const Name = document.getElementById("editName").value;
  const EditId = document.getElementById("editId").value;
  const EditDept = document.getElementById("editDept").value;

  const Edited = doc(db, "users", "9EhnqUZwIeTBh3bjd6H1HReMD9k1");
   updateDoc(Edited, {
    firstnameRef: Name,
    idRef: EditId,
    depRef: EditDept
  });

  console.log(Name);
  console.log(EditId);
  console.log(EditDept);
}
    return(
        <div className="dasha">
            {/* <img className='profimg' src={imgprofile} /> */}
            <p id='userName'>Name</p>
            <p id='email'>Email</p>
            <p id='jobID'>Job ID</p>
            <p id='dept'>Department</p>
            
            <div>
        <input id='editName' type="text" placeholder='Edit Name' />
        <input id='editId' type="text" placeholder='Edit Job ID' />
        <input id='editDept' type="text" placeholder='Edit Department' />
        <button onClick={Submit} >Submit</button>
        


            </div>
        </div>

      
        
    )
}


export default profile