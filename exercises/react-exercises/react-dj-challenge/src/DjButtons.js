import React from 'react';


const btnDiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: '20px',
    margin: '0 10px',
    border: '7px solid #999'
}
const btnContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '75px 75px'
}
const btn1Div = {
    gridRow: 1,
    gridColumn: 1
}
const btn2Div = {
    gridRow: 2,
    gridColumn: 2
}
const btn3Div = {
    gridRow: 2,
    gridColumn: 3
}
const btn4Div = {
    gridRow: 1,
    gridColumn: 4
}
const btn1 = {
    width: '75px',
    height: '50px',
    borderRadius: '10px',
    marginTop: '10px',
    outline: 'none'
}
const btn2 = {
    width: '75px',
    height: '50px',
    borderRadius: '10px',
    marginRight: '5px',
    outline: 'none'
}
const btn3 = {
    width: '75px',
    height: '50px',
    borderRadius: '10px',
    marginLeft: '5px',
    outline: 'none'
}
const btn4 = {
    width: '75px',
    height: '50px',
    borderRadius: '10px',
    marginTop: '10px',
    outline: 'none'
}

function DjButtons(props){
    return (
        <div style={btnDiv}>
        <div style={btnContainer}>
            <div style={btn1Div}>
                <button
                    onClick={props.handleBtnOne}
                    style={btn1}>
                    Button 1
                </button>
            </div>
            <div style={btn2Div}>
                <button
                    onClick={props.handleBtnTwo}
                    style={btn2}>
                    Button 2
                </button>
            </div>
            <div style={btn3Div}>
                <button
                    onClick={props.handleBtnThree}
                    style={btn3}>
                    Button 3
                </button>
            </div>
            <div style={btn4Div}>
                <button
                    onClick={props.handleBtnFour}
                    style={btn4}>
                    Button 4
                </button>
            </div>
        </div>
        </div>
    )
}

export default DjButtons;
