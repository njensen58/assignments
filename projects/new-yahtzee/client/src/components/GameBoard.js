import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkGameInProgress } from '../redux/gamecontrols'
import Dicebox from './Dicebox'
import Scorecard from './Scorecard'

// Needs to check if user currently has
    // - game in progress
        // - if user ID matches with scorecard with status 'ACTIVE', continue game
    // - no game in progress 
        // Present "New Game" button which deletes old scorecard and generates new scorecard.
            // Before old score card is disposed( probably when game over occurs ) save score in stats to preserve record.

class GameBoard extends Component {
    componentDidMount(){
        this.props.checkGameInProgress( this.props.user )
    }

    render(){

        const devStyles = {
            constainer: {
                display: 'flex',
                justifyContent: 'center'
            }
        }

        return (
            <div >
                <div style={ devStyles.container }>
                    <Scorecard /> 
                    <Dicebox />  
                </div>
            </div>
        )
    }
}

export default connect(state=>state, { checkGameInProgress } )( GameBoard )