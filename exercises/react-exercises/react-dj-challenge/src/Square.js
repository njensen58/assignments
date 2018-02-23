import React from 'react'

function Square(props){
    const style={
        backgroundColor: props.color,
        width: '200px',
        height: '200px',
        borderRadius: '10px',
        boxShadow: '-6px 3px 38px -7px rgba(135,135,135,1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#aaa',
        fontFamily: 'sans-serif',
        fontWeight: 'lighter',
        fontSize: '22px'
    }
    return (
        <div style={style}>
            {props.text}
        </div>
    )
}

export default Square;
