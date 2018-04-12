import React from 'react';
import Paper from 'material-ui/Paper';


const ContactList = (props) => {
    return (
        <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
            {props.contacts.filter(contact =>
                contact.name.first
                .toLowerCase()
                .slice(0, props.filterText.toLowerCase().length) ===
                    props.filterText
                    .toLowerCase()
                ).map((contact, i) => {
                    return (
                    <Paper zDepth={2} key={`${contact.name.first}${i}`} style={{
                            display: 'flex',
                            margin: '10px',
                            width: '250px'}}>
                        <img
                            src={contact.picture.medium}
                            alt={`${contact.name.first} ${contact.name.last}`}
                        />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{
                                margin: '0',
                                paddingLeft: '10px',
                                fontFamily: 'sans-serif',
                                textTransform: 'uppercase',
                                fontWeight: 'lighter',
                                fontSize: '15px'
                            }}>{contact.name.first} {contact.name.last}
                        </h3>
                        <p style={{fontSize: '10px', padding: '5px', margin: '0'}}>Email: {contact.email}</p>
                    </div>
                    </Paper>
                )
            })}
        </div>
    )
}

export default ContactList;
