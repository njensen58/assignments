import React from 'react';


function ContactListDisplay(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.phone.slice(0,3) + '-' + props.phone.slice(3,6) + '-' + props.phone.slice(6)}</p>
        </div>
    )
}

export default ContactListDisplay;
