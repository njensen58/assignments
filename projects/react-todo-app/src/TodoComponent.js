import React from 'react';


function TodoComponent(props){
    console.log(props)
    return (
        <div className="todoContainer">
            <div className="todoTitle">
                <h1>{props.title}</h1>
            </div>
            <div className="todoDescriptionDiv">
                <h3>{props.description}</h3>
                <p>{props.price}</p>
            </div>
            <div className="imgDiv">
                <img src={props.imgUrl} className="images" alt={props.title}/>
            </div>
            <div className="editBtnDiv">
                <button className="editBtn">EDIT</button>
            </div>
            <div className="checkboxDiv">
                <input type="checkbox" className="checkbox" onChange={()=>props.completeTodo(props.title)}/>
            </div>
            <div className="delBtnDiv">
                 <button
                     onClick={()=>props.deleteTodo(props.id)}
                     className="delBtn">X</button>
            </div>
        </div>
    )
}

export default TodoComponent;
