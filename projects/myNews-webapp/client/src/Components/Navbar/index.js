import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth';
import './navStyle.css';

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        let authenticated = this.props.user.isAuthenticated;
        return (
            <div className="navContainer">
                { authenticated ? <button onClick={this.props.logout}>Logout</button> : null }
            </div>
        )
    }
}

export default connect(state=>state, {logout})(Navbar);
