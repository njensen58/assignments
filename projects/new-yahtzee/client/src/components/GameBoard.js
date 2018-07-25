import React from 'react'
import { connect } from 'react-redux';

// Needs to check if user currently has
    // - game in progress
        // - if user ID matches with scorecard with status 'ACTIVE', continue game
    // - no game in progress 
        // Present "New Game" button which deletes old scorecard and generates new scorecard.
            // Before old score card is disposed( probably when game over occurs ) save score in stats to preserve record.

const GameBoard = props => {
    console.log(props)
    return (
        <div>
            Gameboard
        </div>
    )
}

export default connect(state=>state, {} )( GameBoard )