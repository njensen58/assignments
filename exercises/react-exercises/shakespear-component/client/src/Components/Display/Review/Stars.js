import React from 'react';
import ReactStars from 'react-stars';


function Stars(props){
    return(
        <ReactStars
            count={props.rating}
            size={30}
            color1={'gold'}
        />
    )
}

export default Stars
