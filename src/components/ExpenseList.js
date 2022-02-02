import React, {useState, useEffect} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';



function ExpenseList(){

    const[expense, setExpense]=useState([])
    

    useEffect(() => {
        getDocs(collection(db, "expense")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                setExpense([...expense, doc.data()])
            });
        });
    },[])
    return(
        <div className='dash'>
                        <Table striped bordered hover>
                        <thead key="u">
                <tr>
                <th>Expense amoount</th>
                <th>Authorised by</th>
                <th>Spent on</th>
                </tr>
            </thead>
            <tbody key="v">
            {expense && expense.map(theExpense=>{
                 return(
                    <tr key= {Math.random()} className='inc'>
                        <td>{theExpense.amount}</td>
                        <td>{theExpense.authorisedBy}</td>
                        <td>{theExpense.spentOn}</td>
                    </tr>
                )
            })}
            </tbody>
            </Table>
        </div>

    )
}


export default ExpenseList