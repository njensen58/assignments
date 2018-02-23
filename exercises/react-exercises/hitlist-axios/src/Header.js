import React from 'react';
import Navbar from './Navbar';

function Header(){
    return (
        <div className="headerContainer">
            <div className="headerOverlay">
                <Navbar />
                <h1><span className="icon">ICON</span>HitList Header</h1>
            </div>
        </div>
    )
}

export default Header;
