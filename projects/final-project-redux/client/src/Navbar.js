import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            expandedNav: true
        }
        this.handleExpandNav = this.handleExpandNav.bind(this);
    }

    handleExpandNav(){
        this.setState(prevState => ({
            expandedNav: prevState.expandedNav ? false : true
        }))
    }

    render(){

        const dropdownMenu = {
            display: this.state.expandedNav ? 'flex' : 'none',
            position: 'absolute',
            flexDirection: 'column',
            backgroundColor: 'rgba(4, 3, 3, 0.83)',
            padding: '5px'
        }

        return (
            <div className="navDiv">
            { this.state.expandedNav ?
                <div>
                <span onClick={this.handleExpandNav}>
                    <i className="ion-ios-minus-empty navicon"></i>
                </span>
                    <div style={dropdownMenu} onClick={this.handleExpandNav}>
                        <Link to="/">Home</Link>
                        <Link to="/game">Game</Link>
                        <Link to="/highscores">Highscores</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            :
                <span onClick={this.handleExpandNav}>
                    <i className="ion-navicon navicon"></i>
                </span>
            }

            </div>
        )
    }
}

export default Navbar;
