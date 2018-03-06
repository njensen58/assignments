import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props){
    const navStyle = {
        fontSize: props.info.nav ? '12px' : '0',
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: '.4s ease-out'
    }
    return (
        <div className="navDiv">
            <div className="navLinks">
                <div
                 className="sandwhichMenu"
                 onClick={props.handleNavExpand}>
                 { props.info.nav ?
                     <i className="ion-minus-round"></i>
                 :
                    <i className="ion-navicon"></i>
                 }
                </div>
                <Link
                    to="/"
                    style={navStyle}
                    >Home</Link>
                <Link
                    to="/myprojects"
                    style={navStyle}
                    >Projects</Link>
                <Link
                    to="/about"
                    style={navStyle}
                    >About/Resume</Link>
            </div>

        </div>
    )
}

export default Navbar;
