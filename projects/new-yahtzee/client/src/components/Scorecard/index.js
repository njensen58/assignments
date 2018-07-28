import React, { Component } from 'react'
import UpperSection from './UpperSection'
import LowerSection from './LowerSection'

const devStyles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '2'
    },
    upper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        gridColumn: '1',
        alignItems: 'center',
    },
    lower: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        gridColumn: '2',
        alignItems: 'center',    
    }
}


class Scorecard extends Component {
    render(){
        return (
            <div style={ devStyles.container }>
                <UpperSection s={ devStyles.upper}/>
                <LowerSection s={ devStyles.lower}/>
            </div>
        )
    }
}

export default Scorecard;