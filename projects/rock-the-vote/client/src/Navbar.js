import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div className="navbarContainer">
            <div>
                <span>Rock-The-Vote!</span>
            </div>
            <div>
                <Link to="/">  /Topics</Link>
                <Link to="/about">  /About</Link>
            </div>
        </div>
    )
}

export default Navbar;
