import React from 'react';
import { connect } from 'react-redux';
import { getTopics, deleteTopic } from '../redux/topics';
import TopicsForm from './TopicsForm';
import Topic from './Topic';
import axios from 'axios';

class TopicsContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            topics: []
        }
        this.updateTopics = this.updateTopics.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.props.getTopics().then(() => {
            this.props.topics.topics.sort((a, b) => Number(b.votes) - Number(a.votes))
            this.setState({
                topics: this.props.topics.topics
            })
        })
    }

    updateTopics(){
        this.props.getTopics().then(() => {
            this.props.topics.topics.sort((a, b) => Number(b.votes) - Number(a.votes))
            this.setState({
                topics: this.props.topics.topics
            })
        })
    }

    handleDelete(id){
        this.props.deleteTopic(id).then(() => {
            this.updateTopics();
        })
    }

    render(){
        const mappedTopics = this.state.topics.map(topic => {
            return (
                <Topic
                    handleDelete={this.handleDelete}
                    updateTopics={this.updateTopics}
                    key={topic._id}
                    info={topic}
                />
            )
        })
        return (
            <div>
                <div>
                    <TopicsForm
                        updateTopics={this.updateTopics}
                    />
                </div>
                <div className="mappedTopicsDiv">
                    {mappedTopics}
                </div>
            </div>
        )
    }
}

export default connect(state=>state, { getTopics, deleteTopic })(TopicsContainer);
