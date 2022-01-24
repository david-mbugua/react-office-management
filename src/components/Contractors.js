import React, {useRef} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';
import {FormLabel}  from 'react-bootstrap';
import {FormControl}  from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import {db} from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
 import {useNavigate} from "react-router-dom";



function Contractors(){
    const contractorName=useRef()
    let navigate=useNavigate();
    
            const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log("User is signed in")
            //const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
            console.log("User is signed out")
            navigate("/login")
        }
        });

    function logOut(){
                const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        console.log("User is signed out")
        }).catch((error) => {
        // An error happened.
        });
    }

    function addContractor(){
        setDoc(doc(db, "contractors", "hello"), {
            contractorName: contractorName.current.value,
          });
    }
    return( 
        <div className="dash">
            <h1>Contractors</h1>

        <div>
        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>contractor name</FormLabel>
          <FormControl ref={contractorName} type="text" placeholder="Contractor name" />
        </FormGroup>
        <button onClick={addContractor} className="btn btn-primary">Add</button>

        </div>
        <Button className="btn btn-secondary" onClick={logOut} >Log out</Button>


        </div>
    )
}

export default Contractors;