import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
     <Navbar/>
     <div className="Mainclass">
     <Sidebar/>
       </div> 
    
    </div>
  );
}

export default App;
