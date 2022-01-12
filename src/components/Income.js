import React, {useRef} from 'react';
import '../App.css';
import { collection, getDocs } from "firebase/firestore";
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';
import {FormLabel}  from 'react-bootstrap';
import {FormControl}  from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import {db} from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";






function Income(){
    const srcIncome=useRef();
    const amount=useRef();
    const incomeFrom=useRef();
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

    function addIncome(){
        setDoc(doc(db, "income", "hello"), {
            srcIncome: srcIncome.current.value,
            amount: amount.current.value,
            incomeFrom: incomeFrom.current.value
          });
    }
    return(
        <div className="dash">
            <div className="headerContainer">
            <h1>Income</h1>
            <Button className="btn btn-primary">Add Income</Button>
            </div>

        <div>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Source of income</FormLabel>
          <FormControl ref={srcIncome} type="text" placeholder="Source of income" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Amount</FormLabel>
          <FormControl ref={amount} type="text" placeholder="Amount" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Income from</FormLabel>
          <FormControl ref={incomeFrom} type="text" placeholder="Income from" />
        </FormGroup>

        <button onClick={addIncome} className="btn btn-primary">submit</button>
        </div>
            
        </div>
    )
}

export default Income;