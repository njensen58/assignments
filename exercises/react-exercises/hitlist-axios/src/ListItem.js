import React from 'react';


function ListItem(props){
    return (
        <div className="itemContainer">
            <div>
                <img
                    src={props.image}
                    alt={props.name}
                    className="images"
                />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default ListItem;
