import React from 'react';
import axios from 'axios';

class CommentsContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            comment: '',
            showComments: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleShowComments = this.handleShowComments.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleShowComments(){
        this.setState(prevState => ({
            showComments: prevState.showComments ? false : true
        }))
    }

    handleAddComment(){
        if(this.state.comment.length > 0){
            const updatedTopic = {
                comments: [...this.props.info.comments, this.state.comment]
            }
            axios.put('/topics/' + this.props.info._id, updatedTopic).then(response => {
                this.props.updateTopics();
            })
        }
    }

    render(){
        const mappedComments = this.props.info.comments.length > 0 ?
            this.props.info.comments.map(comment => {
                return (
                    <p>- {comment}</p>
                )
            })
            :
            'No Comments';
        return (
            <div >
                { this.state.showComments ?
                <div className="commentsContainer">
                    <button onClick={this.handleShowComments}>Hide Comments</button>
                    {mappedComments}
                    <div className="addCommentDiv">
                        <input type="text"
                            placeholder="New Comment"
                            onChange={this.handleChange}
                            value={this.state.comment}
                            name="comment"
                        />
                        <button onClick={this.handleAddComment}>Submit</button>
                    </div>
                </div>
                :
                <div>
                    <button onClick={this.handleShowComments}>Show Comments</button>
                </div>
                }
            </div>
        )
    }
}

export default CommentsContainer;
