import React from 'react';
import axios from 'axios';
import CommentsContainer from './CommentsContainer';

class Topic extends React.Component {
    constructor(){
        super();
        this.state = {
            showDescription: false
        }
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.handleShowDescription = this.handleShowDescription.bind(this);
    }

    handleUpVote(topic){
        const updatedTopic = {
            votes: topic.votes + 1
        }
        axios.put('/topics/' + topic._id, updatedTopic).then(response => {
            this.props.updateTopics();
        })
     }

    handleDownVote(topic){
        const updatedTopic = {
            votes: topic.votes - 1
        }
        axios.put('/topics/' + topic._id, updatedTopic).then(response => {
            this.props.updateTopics();
        })
    }


    handleShowDescription(){
        this.setState(prevState => ({
            showDescription: prevState.showDescription ? false : true
        }))
    }

    render(){
        return (
            <div className="topicContainer">

            { this.state.showDescription ?
                <div>
                    <div className="detailedTopicDisplay">
                        <div className="detailedTopicHeaderDiv">
                            <h2 onClick={this.handleShowDescription}>{this.props.info.title}</h2>
                            <button
                                onClick={()=>this.props.handleDelete(this.props.info._id)}
                                className="deleteBtn">X
                            </button>
                        </div>
                        <div className="votesAndIconsDiv">
                            <div>
                                <button onClick={()=>this.handleDownVote(this.props.info)}> - </button>
                                <span>Votes: {this.props.info.votes}</span>
                                <button onClick={()=>this.handleUpVote(this.props.info)}> + </button>
                            </div>
                            <div className="shareIconDiv">
                                <a href="#" className="shareIcon1"><i className="ion-social-twitter"></i></a>
                                <a href="#" className="shareIcon2"><i className="ion-social-facebook"></i></a>
                                <a href="#" className="shareIcon3"><i className="ion-social-reddit"></i></a>
                            </div>
                        </div>
                            <p>{this.props.info.description}</p>

                    </div>
                    <div className="commentsContainerDiv">
                        <h3>Comments</h3>
                            <CommentsContainer
                                info={this.props.info}
                                updateTopics={this.props.updateTopics}
                            />
                    </div>
                </div>
            :
                <div>
                    <div className="simpleTopicDisplay">
                        <h2 onClick={this.handleShowDescription} >{this.props.info.title}</h2>
                        <div>
                            <button onClick={()=>this.handleDownVote(this.props.info)}> - </button>
                            <span>Votes: {this.props.info.votes}</span>
                            <button onClick={()=>this.handleUpVote(this.props.info)}> + </button>
                        </div>
                    </div>
                    <div className="simpleDescription">
                        <p>{this.props.info.description.slice(0, 50) + '...'}</p>
                    </div>
                </div>
            }

            </div>
        )
    }
}

export default Topic;
