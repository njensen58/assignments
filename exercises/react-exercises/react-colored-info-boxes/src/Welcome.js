import React from 'react';


function Welcome(props){
    const background = {
        backgroundColor: props.color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5px",
        fontSize: "12px",
        padding: "5px",
        borderRadius: "10px"
    }

    const emoSpan = {
        fontSize: "25px"
    }

    const phone = {
        display: "block"
    }

    return (
        <div style={background}>
            <h1>Hello { props.name }</h1>
            <h3>I hope you are <span style={emoSpan}>{props.emotion}</span>!</h3>
            <p style={phone}>{props.number}</p>
        </div>
    )
}

export default Welcome;
