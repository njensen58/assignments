import React from 'react';


function ListItem(props){
    const imageBackground = {
        backgroundImage: 'url('+ props.image + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="itemContainer" style={imageBackground}>
            <div className="itemOverlay">
                <div className="imageDiv">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="images"
                    />
                </div>
                <div className="itemNameDiv">
                    {props.name}
                </div>
            </div>
        </div>
    )
}

export default ListItem;
