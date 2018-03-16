import React from 'react';
import UpperSection from './UpperSection';
import LowerSection from './LowerSection';

function Scorecard(props){
    return (
        <div className="scorecardContainer">
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
            <div>
                <span>Total Score</span>
                <div></div>
            </div>
        </div>
    )
}

export default Scorecard;
