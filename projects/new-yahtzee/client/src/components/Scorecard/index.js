import React from 'react'
import LeftRows from './LeftRows'
import RightRows from './RightRows'

const devStyles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        border: '1px solid black'
    },
    upper: {
        display: 'flex',
        flexDirection: 'column',
        gridColumn: '1',
        border: '1px solid black',
        marginRight: '5px'
    },
    lower: {
        display: 'flex',
        flexDirection: 'column',
        gridColumn: '2',
        border: '1px solid black',
        marginLeft: '5px'
            
    },
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30px'
    }
}


const Scorecard = () => {
    return (
        <div style={ devStyles.flex }>
            <div style={ devStyles.container }>
                <LeftRows s={ devStyles.upper}/>
                <RightRows s={ devStyles.lower}/>
            </div>
        </div>
    )
}

export default Scorecard;