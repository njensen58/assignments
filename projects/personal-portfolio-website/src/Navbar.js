import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){
    return (
        <div>
            <p>Nav</p>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About/Resume</Link>
        </div>
    )
}

export default Navbar;
