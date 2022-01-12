import React, {useRef} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';
import {FormLabel}  from 'react-bootstrap';
import {FormControl}  from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import {db} from '../firebase';
import { doc, setDoc } from "firebase/firestore";

function Employees(){
    const firstName=useRef();
    const secName=useRef();
    const departmt=useRef();
    const joinDate=useRef();

    function addEmployee(){
        setDoc(doc(db, "employees", "hello"), {
            firstName: firstName.current.value,
            secName: secName.current.value,
            departmt: departmt.current.value,
            joinDate: joinDate.current.value
          });
    
    }
    return(
        <div className="dash">
            <h1>Employees</h1>
            <Button className="btn btn-primary">Add employee</Button>


        <div>
        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>First Name</FormLabel>
          <FormControl ref={firstName} type="text" placeholder="First Name" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Second Name</FormLabel>
          <FormControl ref={secName} type="text" placeholder="Second Name" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel> Department </FormLabel>
          <FormControl ref={departmt} type="text" placeholder="Department" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Joining Date</FormLabel>
          <FormControl ref={joinDate} type="text" placeholder="Joining date" />
        </FormGroup>
        <button onClick={addEmployee} className="btn btn-primary">Add</button>

        </div>

        </div>

        
    )
}

export default Employees;