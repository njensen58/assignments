import React from 'react';
const moment = require('moment');


function Comment(props){
    return (
        <div className="commentContainer">
            <div className="commentTime">
                <p>
                    {moment(props.comment.timeStamp).format('MMM D YYYY') + ' - ' +
                    moment(props.comment.timeStamp).format('h:mma')}
                </p>
            </div>
            <div>
                <p>- {props.comment.text}</p>
            </div>
        </div>
    )
}

export default Comment;
