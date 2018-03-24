import React from 'react';
import axios from 'axios';
import SimpleTopicDisplay from './SimpleTopicDisplay';
import DetailedTopicDisplay from './DetailedTopicDisplay';
import { connect } from 'react-redux';
import { upVote, downVote } from './../redux/topics';

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
        this.props.upVote(topic._id, updatedTopic).then(response => {
            this.props.updateTopics();
        })
     }

    handleDownVote(topic){
        const updatedTopic = {
            votes: topic.votes - 1
        }
        this.props.downVote(topic._id, updatedTopic).then(response => {
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
                    <DetailedTopicDisplay
                        handleShowDescription={this.handleShowDescription}
                        handleDelete={this.props.handleDelete}
                        info={this.props.info}
                        handleUpVote={this.handleUpVote}
                        handleDownVote={this.handleDownVote}
                        updateTopics={this.props.updateTopics}
                    />
                :
                    <SimpleTopicDisplay
                        handleShowDescription={this.handleShowDescription}
                        handleDownVote={this.handleDownVote}
                        handleUpVote={this.handleUpVote}
                        info={this.props.info}
                    />
                }
            </div>
        )
    }
}

export default connect(state=>state, { upVote, downVote })(Topic);
