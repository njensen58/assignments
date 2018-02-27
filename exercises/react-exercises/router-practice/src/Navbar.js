import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props){
    return (
        <div className="navBarDiv">
            <Link to="/" className="links">Home</Link>
            <Link to="/about" className="links">About</Link>
            <Link to="/contact" className="links">Contact</Link>
            <Link to="/services" className="links">Services</Link>
        </div>
    )
}

export default Navbar;
