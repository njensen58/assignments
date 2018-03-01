import React from 'react';


function ContactListDisplay(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.phone}</p>
        </div>
    )
}

export default ContactListDisplay;
