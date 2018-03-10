import React from 'react';
import { connect } from 'react-redux';
import { getTopics } from '../redux';
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
            this.setState({
                topics: this.props.topics
            })
        })
    }

    updateTopics(){
        this.props.getTopics().then(() => {
            this.setState({
                topics: this.props.topics
            })
        })
    }

    handleDelete(id){
        axios.delete('/topics/' + id).then(response => {
            this.props.getTopics().then(() => {
                this.setState({
                    topics: this.props.topics
                })
            })
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

export default connect(state=>state, { getTopics })(TopicsContainer);
