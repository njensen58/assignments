import React from 'react';


class UglyThing extends React.Component {
    constructor(){
        super();
        this.state = {
            showComments: false,
            comment: '',
            comments: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCommentAdd = this.handleCommentAdd.bind(this);
        this.handleCommentRemove = this.handleCommentRemove.bind(this);
    }
    handleClick(){
        this.setState(prevState => {
                return {
                showComments: prevState.showComments === false ? true : false
            }
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCommentAdd(){
        this.setState(prevState => {
            return {
                comments: [...prevState.comments, this.state.comment],
                comment: ''
            }
        })
    }

    handleCommentRemove(comment){
        const itemToRemove = comment;
        const currentComments = this.state.comments;
        const updatedComments = currentComments.filter(item => item !== itemToRemove);
            this.setState({
                comments: updatedComments
            })
    }

    render(){
        const comments = {
            display: this.state.showComments ? 'block' : 'none'
        }

        const commentsReveal = {
            display: 'flex',
            width: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: this.state.showComments ? '1' : '.4',
            backgroundColor: '#ddd',
            outline: 'none'
        }

        const deleteImgBtn = {
            margin: '5px',
            backgroundColor: 'red',
            color: 'white'
        }

        return (
            <div className="entryDiv">

                <div style={this.props.imgStyle}>
                    <button
                        onClick={this.handleClick}
                        style={commentsReveal}>{this.state.showComments ? 'V' : '^'}
                    </button>
                    { this.state.showComments ?
                        <button
                            style={deleteImgBtn} onClick={()=>this.props.handleImgRemove(this.props.title)}>Delete this Thing</button>
                    :
                         ''
                    }
                    <div style={comments}>
                        <input
                            type="text"
                            placeholder="Add Comment"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.handleChange}
                        />
                        <button
                            onClick={this.handleCommentAdd}>Add Comment
                        </button>
                        { this.state.comments.map((comment, i) => {
                            return (
                                <li className="commentStyle">- {comment}<button
                                    onClick={()=>this.handleCommentRemove(comment)}
                                    className="removeBtnStyle"
                                    key={comment + '-' + i}
                                >X</button></li>
                            )
                        })}
                    </div>
                </div>

                <h1 className="entryTitle">{this.props.title}</h1>
                <p className="entryDescription">{this.props.description}</p>
            </div>
        )
    }
}

export default UglyThing;
