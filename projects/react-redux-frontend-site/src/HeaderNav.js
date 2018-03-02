import React from 'react';
import { Link } from 'react-router-dom';


function HeaderNav(props){
    return (
        <div className="headerNavDiv">
            <div>
                <h1>Trivia!</h1>
            </div>
            <div className="navDiv">
                <Link to="/">Home</Link>
                <Link to="/game">Game</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default HeaderNav;
