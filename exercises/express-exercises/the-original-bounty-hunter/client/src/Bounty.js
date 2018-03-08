import React from 'react';
import axios from 'axios';

class Bounty extends React.Component {
    constructor(){
        super();
        this.state = {
            isEditing: false,
            firstName: '',
            lastName: '',
            type: '',
            bounty: ''
        }
        this.handleEditDisplay = this.handleEditDisplay.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditDisplay(){
        this.setState(prevState => ({
            isEditing:  prevState.isEditing ? false : true
        }))
    }


    render(){
        return (
            <div>

            { this.state.isEditing ?
                <div>
                    <input
                        type="text"
                        placeholder="New First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}/>
                    <input
                        type="text"
                        placeholder="New Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}/>
                    <input
                        type="text"
                        placeholder="New Type"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleChange}/>
                    <input
                        type="text"
                        placeholder="New Bounty"
                        name="bounty"
                        value={this.state.bounty}
                        onChange={this.handleChange}/>
                    <button>Update Bounty</button>
                    <button onClick={this.handleEditDisplay}>Undo</button>
                </div>
            :
                <div className="bountyContainer">
                    <h1>{this.props.info.firstName} {this.props.info.lastName}</h1>
                    <p>Type: {this.props.info.type}</p>
                    <p>Bounty $: {this.props.info.bounty}</p>
                    <button onClick={this.handleEditDisplay}>Edit</button>
                    <button onClick={()=>this.props.handleDeleteBounty(this.props.info.id)}>X</button>
                </div>
            }
                </div>
        )
    }
}

export default Bounty;
