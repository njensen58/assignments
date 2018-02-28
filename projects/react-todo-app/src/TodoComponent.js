import React from 'react';


function TodoComponent(props){
    const editTitle = {
        display: 'none'
    }

    return (
        <div className="todoContainer">
            <div className="todoTitle">
                <h1>{props.info.title}</h1>
            </div>
            <div className="todoDescriptionDiv">
                <h3>{props.info.description}</h3>
                <p>{props.info.price}</p>
            </div>
            <div className="imgDiv">
                <img src={props.info.imgUrl} className="images" alt={props.info.title}/>
            </div>
            <div className="editBtnDiv">
                <button className="editBtn">EDIT</button>
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
