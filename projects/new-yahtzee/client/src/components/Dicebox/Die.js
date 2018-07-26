import React from 'react'
import { connect } from 'react-redux'

const Die = props => {
    return (
        <div style={ props.devStyles.die }>
            {props.die.value}
        </div>
    )
}

export default connect( null, {} )(Die)