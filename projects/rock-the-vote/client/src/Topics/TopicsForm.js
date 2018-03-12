import React from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../redux';


class TopicsForm extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            isAddingPost: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddTopic = this.handleAddTopic.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddTopic(){
        this.setState(prevState => ({
            isAddingPost: prevState.isAddingPost ? false : true
        }))
    }

    handleSubmit(e){
        e.preventDefault();
        const newPost = {
            title: this.state.title,
            description: this.state.description,
            votes: 0
        }
        this.props.addTopic(newPost).then(() => {
            this.props.updateTopics();
        });
        this.setState({
            title: '',
            description: '',
            isAddingPost: false
        })
    }

    render(){

        const expandedAdd = {
            height: this.state.isAddingPost ? '300px' : '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gridColumn: '2',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
            backgroundColor: '#60BAA799'
        }


        return (
            <div className="topicFormContainer">
            { this.state.isAddingPost ?
                <div style={expandedAdd}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Title"
                    />
                <textarea
                        name="description"
                        value={this.state.description}
                        cols="40"
                        rows="10"
                        onChange={this.handleChange}
                        placeholder="Description"
                    ></textarea>
                <button onClick={this.handleSubmit}>Submit</button>
                <div>
                    <button onClick={this.handleAddTopic}>Close</button>
                </div>
                </div>
            :
                <div className="addTopicDiv">
                    <button onClick={this.handleAddTopic}>Add Topic</button>
                </div>
            }
            </div>
        )
    }
}

export default connect(state=>state, { addTopic })(TopicsForm);
