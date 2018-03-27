import React from 'react';
import { connect } from 'react-redux';

function SimpleTopicDisplay(props){
    let auth = props.user.isAuthenticated;
    return (
        <div>
            <div className="simpleTopicDisplay">
                <h2 onClick={props.handleShowDescription}>{props.info.title}</h2>
                <div>
                    {auth ? <button onClick={()=>props.handleDownVote(props.info)}> - </button> : null }
                    <span>Votes: {props.info.votes}</span>
                    {auth ? <button onClick={()=>props.handleUpVote(props.info)}> + </button> : null }
                </div>
            </div>
            <div className="simpleDescription">
                <p>{props.info.description.slice(0, 50) + '. . .'}</p>
            </div>
        </div>
    )
}

export default connect(state=>state, {})(SimpleTopicDisplay);
