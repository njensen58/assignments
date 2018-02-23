import React from 'react';
import Item from './Item';


function ItemList(props){
        return (
            <div className="itemListContainer">
                <h1>Shopping List</h1>
                <h2>{props.value}</h2>
                <div>
                    <Item
                        handleDelete={props.handleDelete}
                        handleComplete={props.handleComplete}
                        items={props.items}
                        completed={props.completed}
                    />
                </div>
            </div>
            )
        }

export default ItemList;
