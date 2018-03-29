import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/Auth';
import {Link} from 'react-router-dom';
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
            <div>
                { authenticated ?
                    <div className="navContainer">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <button
                            onClick={this.props.logout}
                            className="logout-nav">Logout
                        </button>
                    </div>
                :
                    <div className="navContainer">
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                    </div>
                }
            </div>
        )
    }
}

export default connect(state=>state, {logout})(Navbar);
