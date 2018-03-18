import React from 'react';
import UpperSection from './UpperSection';
import LowerSection from './LowerSection';

function Scorecard(props){

    const howToPlay = {
        display: 'none'
    }
    return (
        <div className="scorecardContainer">
            <div style={howToPlay}>

            </div>
            <div className="upperSectionDiv">
                <UpperSection
                    currentNums={props.currentNums}
                    resetCurrentNums={props.resetCurrentNums}
                />
            </div>
            <div className="lowerSectionDiv">
                <LowerSection
                    currentNums={props.currentNums}
                    resetCurrentNums={props.resetCurrentNums}
                />
            </div>
            <div className="yahtzeeTitleDiv">
                <h1>YAHTZEE</h1>
            </div>
            <div className="totalScoreDiv">
                <div>
                    <h3>Total Score</h3>
                </div>
                <div><span>{props.totalGameScore}</span></div>
            </div>
        </div>
    )
}

export default Scorecard;
