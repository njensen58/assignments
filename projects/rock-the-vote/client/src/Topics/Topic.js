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
            <div>

                <div>
                    <h2>{this.props.info.title}</h2>
                    <button onClick={()=>this.handleDownVote(this.props.info)}> - </button>
                    <span>Votes: {this.props.info.votes}</span>
                    <button onClick={()=>this.handleUpVote(this.props.info)}> + </button>
                </div>

                <p>{this.props.info.description}</p>
                <button onClick={()=>this.props.handleDelete(this.props.info._id)}>Delete</button>

                <div>
                    <h3>Comments</h3>
                        <CommentsContainer
                            info={this.props.info}
                            updateTopics={this.props.updateTopics}
                        />
                </div>
            </div>
        )
    }
}

export default Topic;
