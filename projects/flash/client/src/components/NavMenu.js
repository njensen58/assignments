import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const NavMenu = props => {

    const { toggle, isToggled } = props

    const toggler = toggle => {
        return { 
            transform: toggle ? "translateY(0)" : "translateY(-100vh)"
        }
    }

    const style = {
        nav: toggler( isToggled )
    }


    return (
        <React.Fragment>
                <div 
                    className="nav" 
                    style={ style.nav } 
                    onClick={ toggle }>
                    <div className="nav-menu" onClick={ toggle }>
                        <Link to="/" onClick={ toggle } >Home</Link>
                        <Link to="/decks" onClick={ toggle } >Decks</Link>
                        <Link to="/deckmanager" onClick={ toggle } >Deck Manager</Link>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default withRouter( NavMenu )