import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props){
    const navStyle = {
        display: props.info.nav ? 'inline-block' : 'none',
        textDecoration: 'none',
        textTransform: 'uppercase'
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
                    >/Home</Link>
                <Link
                    to="/myprojects"
                    style={navStyle}
                    >/Projects</Link>
                <Link
                    to="/about"
                    style={navStyle}
                    >/About-Resume</Link>
            </div>

        </div>
    )
}

export default Navbar;
