import React from 'react';
import { Link } from 'react-router-dom';


function WelcomePage(){
    return (
        <div className="welcomePageDiv">
            <div className="welcomePageOverlay">
                <h1>Trivia!</h1>
                <button><Link to="/game"><i className="ion-help"></i></Link></button>
            </div>
        </div>
    )
}

export default WelcomePage;
