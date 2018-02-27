import React from 'react';


function TodoComponent(props){
    return (
        <div className="todoContainer">
            <div className="todoTitle">
                <h1>{props.title}</h1>
            </div>
            <div className="todoDescription">
                <h3>{props.description}</h3>
            </div>
            <div>
                <img src={props.img} className="images" alt={props.title}/>
            </div>
        </div>
    )
}

export default TodoComponent;
