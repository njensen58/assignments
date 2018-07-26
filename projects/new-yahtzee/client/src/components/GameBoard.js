import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkGameInProgress } from '../redux/scorecard'

// Needs to check if user currently has
    // - game in progress
        // - if user ID matches with scorecard with status 'ACTIVE', continue game
    // - no game in progress 
        // Present "New Game" button which deletes old scorecard and generates new scorecard.
            // Before old score card is disposed( probably when game over occurs ) save score in stats to preserve record.

class GameBoard extends Component {

    // componentDidMount(){
    //     this.props.checkGameInProgress( this.props.user._id, this.props.user )
    // }

    render(){
        console.log(this.props)
        return (
            <div>
                Gameboard
                <button onClick={() => this.props.checkGameInProgress(this.props.user) }> click me dammit </button>
            </div>
        )
    }
}

export default connect(state=>state, { checkGameInProgress } )( GameBoard )