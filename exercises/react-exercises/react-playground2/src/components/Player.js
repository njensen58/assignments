import React from 'react';


const Player = (props) => {
    const pStyle = {
        position: 'absolute',
        bottom: props.y,
        left: props.x,
        height: '50px',
        width: '50px',
        borderTopRightRadius: '30%',
        borderTopLeftRadius: '30%',
        backgroundColor: 'cornflowerblue'
    }
    return (
        <div style={pStyle}></div>
    )
}

export default Player;
