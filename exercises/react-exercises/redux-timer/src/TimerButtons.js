import React from 'react';


function TimerButtons(props){
    return (
        <div className="btnDisplayDiv">
            <button onClick={props.handleStart}>Start</button>
            <button onClick={props.handleStop}>Stop</button>
            <button onClick={props.handleReset}>Reset</button>
            <button onClick={props.handleLap}>Lap</button>
        </div>
    )
}

export default TimerButtons;
