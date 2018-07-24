import React, { Component } from 'react'
import NavMenu from './NavMenu'


class Navbar extends Component {
    constructor(){
        super()
        this.state = { isToggled: false }
    }

    toggle = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }
    
    render(){
        return (
            <div>
                <NavMenu 
                    isToggled={ this.state.isToggled }
                    toggle={ this.toggle }
                />
                <div className="nav-banner">
                    <span onClick={ this.toggle }><i>|||</i></span>
                </div>
            </div>
        )
    }
}

export default Navbar
