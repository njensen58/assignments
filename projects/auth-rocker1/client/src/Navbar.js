import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './redux/auth'

function Navbar(props){
    console.log(props)
    return (
        <div className="navbarContainer">
            <div>
                <div><Link to="/login">Login</Link></div>
                <div><Link to="/">Sign up</Link></div>
            </div>
            <div>
                <div><Link to="/topics">  /Topics</Link></div>
                <div><Link to="/about">  /About</Link></div>
            </div>
            <div>
                <button onClick={props.logout}>Logout</button>
            </div>
        </div>
    )
}

export default connect(state=>state, { logout })(Navbar);
