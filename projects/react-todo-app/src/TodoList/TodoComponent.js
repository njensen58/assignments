import React from 'react';

function TodoComponent(props){
    const completed = {
        opacity: props.info.completed ? '.2' : '1'
    }
    return (
        <div className="todoContainer">
            <div className="todoTitle">
                <h1 style={completed}>{props.info.title}</h1>
            </div>
            <div className="todoDescriptionDiv">
                <h3 style={completed}>{props.info.description}</h3>
                <p style={completed}>{props.info.price}</p>
            </div>
            <div className="imgDiv">
                <img src={props.info.imgUrl} className="images" alt={props.info.title} style={completed}/>
            </div>
            <div>
                <button onClick={props.handleToggleEdit}>Edit</button>
            </div>
            <div className="checkboxDiv">
                { props.info.completed ?
                    <button
                        className="checkboxDiv2"
                        onClick={()=>props.handleComplete(props.info._id)}>Undo</button>
                :
                    <button
                        onClick={()=>props.handleComplete(props.info._id)}>Complete</button>
                }
            </div>
            <div className="delBtnDiv">
                 <button
                     onClick={()=>props.deleteTodo(props.info._id)}
                     className="delBtn">X</button>
            </div>
        </div>
    )
}

export default TodoComponent;
