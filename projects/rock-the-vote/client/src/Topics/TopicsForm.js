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
            description: ''
        })
    }

    render(){
        return (
            <div className="topicFormContainer">
            { this.state.isAddingPost ?
                <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Title"
                    />
                <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Description"
                    />
                    <button>Submit</button>
                </form>
                <div>
                    <button onClick={this.handleAddTopic}>Close</button>
                </div>
                </div>
            :
                <div>
                    <button onClick={this.handleAddTopic}>Add Topic</button>
                </div>
            }
            </div>
        )
    }
}

export default connect(state=>state, { addTopic })(TopicsForm);
