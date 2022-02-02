import React, {useState, useEffect} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';




function IncomeList(){

    const[income, setIncome]=useState([])
     getDocs(collection(db, "income")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            // setIncome([...income, doc.data()])
        });
    }); 
    // const fetchIncome = async()=>{
    //     const response = db.collection("income");
    //     const data = await response.get();
    //     data.docs.forEach(item=>{
    //         setIncome([...income, item.data()])
    //     })
    // }
    

    return(
        <div className='dash'>
            {income && income.map(theIncome=>{
                return(
                    <div className='inc'>
                        <h1>Hello world</h1>
                        <h6>{theIncome.amount}</h6>
                        <h6>{theIncome.incomeFrom}</h6>
                    </div>
                )
            })}
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


export default IncomeList