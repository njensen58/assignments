import React from 'react';


function TodoComponent(props) {
    return (
      <div>
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
        <p>{props.price || "$FREE"}</p>
      </div>
    )
  }

export default TodoComponent;
