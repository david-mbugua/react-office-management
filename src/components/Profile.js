import React from 'react';
import '../App.css';
import imgprofile from '../IMAGES/imgone.jpg'

function profile(){
    return(
        <div className="dasha">
            <img className='profimg' src={imgprofile} />
            <p>Name</p>
            <p>Email</p>
            <p>User ID</p>
            <p>Department</p>
            <p>Country of origin</p>
            <p>Home address</p>
            <p>LinkedIn</p>
        </div>
    )
}


export default profile