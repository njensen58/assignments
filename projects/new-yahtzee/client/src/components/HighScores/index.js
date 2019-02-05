import React from 'react'
import { connect } from 'react-redux';

const HighScores = props => {
    console.log(props)
    return (
        <div style={{ fontSize: '40px'}}>
            High Scores Page
           
        </div>
    )
}

export default connect(null, {})(HighScores)