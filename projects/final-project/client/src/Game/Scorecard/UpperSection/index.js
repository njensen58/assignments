import React from 'react';
import Ones from './Ones';
import Twos from './Twos';

function UpperSection(props){
    return (
        <div className="upperSectionContainer">
            <Ones currentNums={props.currentNums}/>
            <Twos currentNums={props.currentNums}/>
        </div>
    )
}

export default UpperSection;
