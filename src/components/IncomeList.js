import React, {useState, useEffect} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import { collection,  getDocs } from "firebase/firestore";
import {db} from '../firebase';




function IncomeList(){

    const[income, setIncome]=useState([])
    useEffect(() => {
        getDocs(collection(db, "income")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                setIncome([...income, doc.data()])
            });
        });
    },[])
      
    // const fetchIncome = async()=>{
    //     const response = db.collection("income");
    //     const data = await response.get();
    //     data.docs.forEach(item=>{
    //         setIncome([...income, item.data()])
    //     })
    // }
    

    return(
        <div className='dash'>
            {/* {income && income.map(theIncome=>{
                return(
                    <div className='inc'>
                        <h6>{theIncome.amount}</h6>
                        <h6>{theIncome.incomeFrom}</h6>
                    </div>
                )
            })} */}
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Income amoount</th>
                <th>Income source</th>
                </tr>
            </thead>
            <tbody>
            {income && income.map(theIncome=>{
                 return(
                    <tr className='inc'>
                        <td>{theIncome.amount}</td>
                        <td>{theIncome.incomeFrom}</td>
                    </tr>
                )
            })}
            </tbody>
            </Table>
        </div>

    )
}


export default IncomeList