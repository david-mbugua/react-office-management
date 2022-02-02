import React from 'react'
import '../App.css'
import Dashboard from './Dashboard'
import Income from './Income'
import Expense from './Expense'
import Employees from './Employees'
import Inventory from './Inventory'
import Contractors from './Contractors'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import IncomeList from './IncomeList'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import { getAuth, signOut } from "firebase/auth";
import ExpenseList from './ExpenseList'
import Contractorlist from './Contractorlist'





function Sidebar(){
    //let navigate=useNavigate();


    function logOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        console.log("User is signed out")
        }).catch((error) => {
        // An error happened.
        });
    }
    return(
        <div className="side">
            <Router>
        <ul>
            <li className="listItem"> <Link className="menuItem" to="/">Dashboard</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/income">Income</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/expense">Expense</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/employees">Employees</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/contractors">Contractors</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/incomeList">Income List</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/expenseList">Expense List</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/contractorlist">Contractor List</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/inventory">Inventory</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/login">Login</Link> </li>
            <li className="listItem"> <Link className="menuItem" to="/profile">Profile</Link> </li>
            <li onClick={logOut}>Log out</li>
        </ul>

        <Routes>
        <Route path="/" element={ <Dashboard />} />
        <Route path="/income" element={ <Income />} />
        <Route path="/expense" element={ <Expense />} />
        <Route path="/employees" element={ <Employees />} />
        <Route path="/inventory" element={ <Inventory />} />
        <Route path="/contractors" element={ <Contractors />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/incomeList" element={ <IncomeList/> } />
        <Route path="/expenseList" element={ <ExpenseList/> } />
        <Route path="/contractorlist" element={ <Contractorlist/> } />

        </Routes>
    
        </Router>


    </div>
    )
    
}

export default Sidebar;