import React from 'react';

function BountyControls(props){
        return (
            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={ props.handleChange}
                    value={ props.info.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={ props.handleChange}
                    value={ props.info.lastName}
                />
                <input
                    type="text"
                    placeholder="Type"
                    name="type"
                    onChange={ props.handleChange}
                    value={ props.info.type}
                />
                <input
                    type="text"
                    placeholder="Bounty"
                    name="bounty"
                    onChange={ props.handleChange}
                    value={ props.info.bounty}
                />
            <button onClick={ props.handleAddBounty}>Add New Bounty</button>
        </div>
        )
}

export default BountyControls;
