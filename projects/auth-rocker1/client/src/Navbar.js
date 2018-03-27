import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './redux/auth'

function Navbar(props){
    let authenticated = props.user.isAuthenticated;
    return (
        <div className="navbarContainer">
            <div>
                { authenticated ? null : <div><Link to="/login">Login</Link></div> }
                { authenticated ? null : <div><Link to="/">Sign up</Link></div> }
            </div>
            <div>
                <div><Link to="/topics">  /Topics</Link></div>
                <div><Link to="/about">  /About</Link></div>
            </div>
            <div>
                {authenticated ? <button onClick={props.logout}>Logout</button> : null }
            </div>
        </div>
    )
}

export default connect(state=>state, { logout })(Navbar);
