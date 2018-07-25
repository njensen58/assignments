import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Toggle from '../../shared/Toggle'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth'
import './navStyle.css'

const Navbar = props => {

    const navActive = isToggled => {
        return {
            transform: isToggled ? "translateX(0)" : "translateX(-250px)"
        }
    }

    const overlay = isToggled => {
        return {
            opacity: isToggled ? "1" : "0",
            transform: isToggled ? "translateX(0)" : "translateX(-100%)"
        }
    }

    const { user, logout } = props

    return (
        <Toggle render={({ isToggled, toggle }) => 
            <React.Fragment>
                <div className="menu-icon">
                    { !isToggled && <button onClick={ toggle }> ||| </button> }
                </div>
                <div className="page-overlay" style={ overlay( isToggled ) } onClick={ toggle }></div>
                <div className="navbar" style={ navActive( isToggled ) } onClick={ toggle }>   
                    { user.isAuthenticated && <Link to="/"> Game </Link> }
                    <Link to="/highscores"> Highscores </Link>
                    { user.isAuthenticated && <Link to="/stats"> Stats </Link> }
                    { user.isAuthenticated && <button onClick={ logout }>Logout</button> }
                </div>
            </React.Fragment>
        } />
    )
}

export default withRouter(connect(state=>state, { logout })(Navbar))