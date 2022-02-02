import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';


function Inventory(){
    const hello=()=>{
        
        let x=13;
        let m=21;
        let y=x+m;
        alert(y);
    }
    const testt=()=>{
        
    }

    
    return(
        <div className="dash">
            <h1>Inventory</h1>
            <button onClick={hello}>Add Inventory</button>
            <button onclick={testt}>Test button</button>
            
            
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

export default Inventory;