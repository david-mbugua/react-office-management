import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';



function Contractorlist(){

    getDocs(collection(db, "contractor")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });  

    return(
        <div className='dash'>
                        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Item</th>
                <th>Item Code</th>
                <th>Item Description</th>
                <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td></td>
                </tr>
            </tbody>
            </Table>
        </div>

    )
}


export default Contractorlist