import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Form}  from 'react-bootstrap';
import {FormLabel}  from 'react-bootstrap';
import {FormControl}  from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
//import {app} from '../firebase';
import {db} from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Button from '@restart/ui/esm/Button';
import {useNavigate} from "react-router-dom";



  

  function Signup(){
    const emailRef=useRef();
    const passwordRef=useRef();
    const firstnameRef=useRef();
    const secondnameRef=useRef();
    const idRef=useRef();
    const depRef=useRef();


   let navigate=useNavigate();


    function SignupUser(){
      const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user; 
        // setDoc.collection("users").doc().set({
        //   name: "Los Angeles"
        // })


         setDoc(doc(db, "users", user.uid ), {
          firstnameRef: firstnameRef.current.value,
          secondnameRef: secondnameRef.current.value,
          emailRef: emailRef.current.value,
          depRef: depRef.current.value,
          idRef: idRef.current.value,
          userId: user.uid
        }).then(()=>{
          navigate("/")
        })
         
        // ...

              // Add a new document in collection "cities"
      //  setDoc(doc(db, "users", user.uid), {
      //   firstnameRef: firstnameRef.current.value,
      //   secondnameRef: secondnameRef.current.value
      // });

      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
    }
    
  

    return(
      <div className="mainForm">


       <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>First Name</FormLabel>
          <FormControl ref={firstnameRef} type="text" placeholder="First Name" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Second Name</FormLabel>
          <FormControl ref={secondnameRef} type="text" placeholder="Second Name" />
        </FormGroup>
        

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Email Address</FormLabel>
          <FormControl ref={emailRef} type="email" placeholder="Enter email" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Job ID</FormLabel>
          <FormControl ref={idRef} type="text" placeholder="Enter Job ID" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Department</FormLabel>
          <FormControl ref={depRef} type="text" placeholder="Enter Department" />
        </FormGroup>
  
        <FormGroup className="mb-3" controlId="formBasicPassword">
          <FormLabel>Create a password</FormLabel>
          <FormControl ref={passwordRef} type="password" placeholder="Password" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicPassword">
          <FormLabel>Verify password</FormLabel>
          <FormControl  type="password" placeholder="Password" />
        </FormGroup>
            
        <Button type="submit" onClick={SignupUser}>SignUp</Button>

      </div>
          // <button type="submit" onClick={SignupUser}>SignUp</button>
  
      
    )
    }

export default Signup;
