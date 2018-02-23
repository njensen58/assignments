import React from 'react';


function DjBoard(props){
    return (
        <div className="boardContainer">
            <div style={props.btnOneColors && props.btnTwoColors}>Box 1</div>
            <div style={props.btnOneColors && props.btnTwoColors}>Box 2</div>
            <div style={props.btnOneColors}>Box 3</div>
            <div style={props.btnOneColors}>Box 4</div>
        </div>
    )
}

export default DjBoard;
