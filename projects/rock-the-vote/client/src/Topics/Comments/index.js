import React from 'react';
import axios from 'axios';
import Comment from './Comment';

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

    handleAddComment(id){
        axios.post(`/topics/${id}/comment`, {text: this.state.comment}).then(response => {
            this.props.updateTopics();
        })
        this.setState({
            comment: ''
        })
    }

    render(){
        const mappedComments = this.props.comments.length > 0 ?
            this.props.comments.map((comment, i) => {
                return (
                    <Comment key={comment._id} comment={comment}/>
                )
            })
            :
            <span>No Comments</span>
        return (
            <div>
                { this.state.showComments ?
                    <div className="commentsContainer">
                        <button
                            onClick={this.handleShowComments}
                            className="hideCommentsBtn"
                            ><i className="ion-android-arrow-dropup icon"></i>
                        </button>
                        {mappedComments}
                        <div className="addCommentDiv">
                            <input type="text"
                                placeholder="New Comment"
                                onChange={this.handleChange}
                                value={this.state.comment}
                                name="comment"
                            />
                        <button onClick={()=>this.handleAddComment(this.props._id)}>Submit</button>
                        </div>
                    </div>
                :
                    <div className="showCommentsBtn">
                        <button
                            onClick={this.handleShowComments}
                            className="dropdownBtn"><i className="ion-android-arrow-dropdown icon"></i>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default CommentsContainer;
