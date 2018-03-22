import React from 'react';
import UpperSection from './UpperSection';
import LowerSection from './LowerSection';

function Scorecard(props){
    return (
        <div className="scorecardContainer">
            <div>
                <UpperSection currentNums={props.currentNums}/>
            </div>
            <div>
                <LowerSection />
            </div>
        </div>
    )
}

export default Scorecard;
