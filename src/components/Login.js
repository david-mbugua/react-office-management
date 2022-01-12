import React, {useRef} from 'react';
import '../App.css'
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {FormLabel}  from 'react-bootstrap';
import {FormControl}  from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import {FormText} from 'react-bootstrap';

import {
 // BrowserRouter as //Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




function Login(){
  const emailRef=useRef();
  const passwordRef=useRef();

function loginUser(){
  const auth = getAuth();

  console.log("hello");

signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user.uid);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}

    return(

      
          <div className="mainForm">
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <FormLabel>Email address</FormLabel>
        <FormControl ref={emailRef} type="email" placeholder="Enter email" />
        <FormText className="text-muted">
          We'll never share your email with anyone else.
        </FormText>
      </FormGroup>

      <FormGroup className="mb-3" controlId="formBasicPassword">
        <FormLabel>Password</FormLabel>
        <FormControl ref={passwordRef} type="password" placeholder="Password" />
      </FormGroup>
      
      <FormGroup className="mb-3" controlId="formBasicCheckbox">
        <h1 className="regLink">do not have an account? <Link to="/signup">click here</Link></h1>
      </FormGroup>
        <Routes>
            <Route path="/signup" element={ <Signup/>} />
            </Routes>
      <Button onClick={loginUser} variant="primary" type="submit">Submit</Button>
    </div>
    
    )
}

export default Login;