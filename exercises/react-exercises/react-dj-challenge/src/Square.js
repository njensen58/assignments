import React from 'react'

function Square(props){
    const style={
        backgroundColor: props.color,
        width: props.shrink,
        height: props.shrink,
        borderRadius: '10px',
        boxShadow: '-6px 3px 38px -7px rgba(135,135,135,1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: props.fontStyle.fontColor,
        fontFamily: 'sans-serif',
        fontWeight: props.fontStyle.fontWeight,
        fontSize: props.fontStyle.fontSize,
        letterSpacing: props.fontStyle.letterSpacing,
        transition: '.3s'
    }
    return (
        <div style={style}>
            {props.text}
        </div>
    )
}

export default Square;
