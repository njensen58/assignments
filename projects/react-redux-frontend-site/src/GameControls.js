import React from 'react';



function GameControls(props){
    return (
        <div className="newQuestionBtn">
            <div>
            <p>Select Category</p>
            <select
                value={props.info.currentCat}
                onChange={props.handleChange}
                className="selectStyle"
            >
                <option value="general">General Knowledge</option>
                <option value="film">Film</option>
                <option value="tv">TV</option>
                <option value="history">History</option>
                <option value="celeb">Celebrities</option>
                <option value="geo">Geography</option>
                <option value="sports">Sports</option>
            </select>
            </div>
            <button onClick={props.handleClick}>New Question</button>
        </div>
    )
}

export default GameControls;
