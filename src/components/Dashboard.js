import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



function Dashboard(){
    return(
        <div className="dash">
            <h1>Dashboard</h1>
            <Button>Hello World</Button>
        </div>
    )
}

export default Dashboard;