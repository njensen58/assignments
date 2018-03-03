import React from 'react';
import { Link } from 'react-router-dom'


function Footer(){
    return (
        <div className="footerDiv">
            <Link to="/about"><i className="ion-ios-lightbulb-outline icons"></i></Link>
        </div>
    )
}

export default Footer;
