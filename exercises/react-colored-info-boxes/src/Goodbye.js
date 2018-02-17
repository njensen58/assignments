import React from 'react';

function Goodbye(props){
    return (
        <div style={{backgroundColor: props.attributes.color, gridColumn: props.attributes.gridColumn, textAlign: "center"}}>
            <h4 style={{fontSize: props.attributes.fontSize}}>{props.fareWell}</h4>
        </div>
    )
}

export default Goodbye;
