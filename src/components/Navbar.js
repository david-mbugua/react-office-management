import React from 'react'
import '../App.css'
//import Profile from './Profile'
import {
    BrowserRouter as Router,
    Routes,
    //Route,
  //  Link,
  } from "react-router-dom";


function Navbar(){
    return(
        <div className="nav">
            <h4>OFFICE</h4>
            <Router>
            <ul className="uItems">
                <li className="lItems">Employees</li>
                <li className="lItems">About</li>
                <li className="lItems">contact us</li>
               
            </ul>

            <Routes>
            
            </Routes>

            </Router>
        </div>

    )
}
export default Navbar;