import React from 'react';
import CommentsContainer from './Comments';

function DetailedTopicDisplay(props){
    return (
        <div>
            <div className="detailedTopicDisplay">
                <div className="detailedTopicHeaderDiv">
                    <h2 onClick={props.handleShowDescription}>{props.info.title}</h2>
                    <button
                        onClick={()=>props.handleDelete(props.info._id)}
                        className="deleteBtn">X
                    </button>
                </div>
                <div className="votesAndIconsDiv">
                    <div>
                        <button onClick={()=>props.handleDownVote(props.info)}> - </button>
                        <span>Votes: {props.info.votes}</span>
                        <button onClick={()=>props.handleUpVote(props.info)}> + </button>
                    </div>
                    <div className="shareIconDiv">
                        <a href="#" className="shareIcon1"><i className="ion-social-twitter"></i></a>
                        <a href="#" className="shareIcon2"><i className="ion-social-facebook"></i></a>
                        <a href="#" className="shareIcon3"><i className="ion-social-reddit"></i></a>
                    </div>
                </div>
                    <p>{props.info.description}</p>
            </div>
            <div className="commentsContainerDiv">
                <h3>Comments</h3>
                <CommentsContainer
                    _id={props.info._id}
                    comments={props.info.comments}
                    updateTopics={props.updateTopics}
                />
            </div>
        </div>
    )
}

export default DetailedTopicDisplay;
