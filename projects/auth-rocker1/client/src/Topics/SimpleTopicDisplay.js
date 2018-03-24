import React from 'react';

function SimpleTopicDisplay(props){
    return (
        <div>
            <div className="simpleTopicDisplay">
                <h2 onClick={props.handleShowDescription}>{props.info.title}</h2>
                <div>
                    <button onClick={()=>props.handleDownVote(props.info)}> - </button>
                    <span>Votes: {props.info.votes}</span>
                    <button onClick={()=>props.handleUpVote(props.info)}> + </button>
                </div>
            </div>
            <div className="simpleDescription">
                <p>{props.info.description.slice(0, 50) + '. . .'}</p>
            </div>
        </div>
    )
}

export default SimpleTopicDisplay;
