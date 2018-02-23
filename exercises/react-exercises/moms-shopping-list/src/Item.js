import React from 'react';

function Item(props){
        return (
            <div className="itemContainer">
                {props.items.map((item, i) => {
                    return (
                        <p style={props.completed}
                           key={item + '-' + i}
                           className="itemStyle">
                            <button
                                onClick={()=>props.handleDelete(item)}
                                className="deleteBtn">
                                X
                            </button>
                            <span>{item}</span>
                            <button
                                onClick={()=>props.handleComplete(item)}
                                className="completeBtn">
                                √
                            </button>
                        </p>
                        )}
                    )}
            </div>
        )
}


export default Item;

{/*You can also do onClick={props.handleDelete.bind(this, item)}*/}
