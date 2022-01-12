import React, {useRef} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';
import {FormLabel}  from 'react-bootstrap';
import {FormControl}  from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import {db} from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";





function Expense(){
    const amount=useRef();
    const spentOn=useRef();
    const authorisedBy=useRef();
    let navigate=useNavigate();


    const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log("User is signed in")
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
            console.log("User is signed out")
            navigate("/login")
        }
        });

    function addExpense(){
        setDoc(doc(db, "expense", "hello"), {
            spentOn: spentOn.current.value,
            amount: amount.current.value,
            authorisedBy: authorisedBy.current.value
          });
    }
    return(
        <div className="dash">
            <h1>Expense</h1>

            <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Amount</FormLabel>
          <FormControl ref={amount} type="number" placeholder="Amount" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Spent on</FormLabel>
          <FormControl ref={spentOn} type="text" placeholder="Spent on" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Authorised by</FormLabel>
          <FormControl ref={authorisedBy} type="text" placeholder="Authorised by" />
        </FormGroup>

        <Button onClick={addExpense} className="btn btn-primary">Submit</Button>
        </div>
        
    )
}

export default Expense;