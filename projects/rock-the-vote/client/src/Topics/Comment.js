import React from 'react';


function Comment(props){
    return (
        <div className="commentContainer">
            <div className="commentTime">
                
            </div>
            <div>
                <p>- {props.comment}</p>
            </div>
        </div>
    )
}

export default Comment;
