import React from 'react';


function DjButtons(props){
    return (
        <div className="buttonsContainer">
            <div>
                <button onClick={props.handleBtnOne}>Button 1</button>
                <button onClick={props.handleBtnTwo}>Button 2</button>
            </div>
        </div>
    )
}

export default DjButtons;
