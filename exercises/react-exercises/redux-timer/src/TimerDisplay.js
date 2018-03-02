import React from 'react';


function TimerDisplay(props){
    const mappedLaps = props.laps.map(lap => {
        return <h4 key={lap}>{lap}</h4>
    })
    return (
        <div className="timerDisplayDiv">
            <h1 className="timerDisplay">{props.minutes < 10 ?
                    0 + '' + props.minutes
                    : props.minutes
                }:{props.seconds < 10 ?
                    0 + '' + props.seconds
                    : props.seconds
                }</h1>
            <div className="mappedLaps">
                {mappedLaps}
            </div>
        </div>
    )
}

export default TimerDisplay;
