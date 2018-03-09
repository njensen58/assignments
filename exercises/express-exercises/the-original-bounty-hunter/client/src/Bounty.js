import React from 'react';

class Bounty extends React.Component {
    constructor(){
        super();
        this.state = {
            isEditing: false,
            isExpanded: false,
            firstName: '',
            lastName: '',
            type: '',
            bountyAmount: ''
        }
        this.handleEditDisplay = this.handleEditDisplay.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDisplayExpand = this.handleDisplayExpand.bind(this);
        this.handleEditFieldUpdate = this.handleEditFieldUpdate.bind(this);
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

    handleDisplayExpand(){
        this.setState(prevState => ({
            isExpanded: prevState.isExpanded ? false : true
        }))
    }

    handleEditFieldUpdate(){
        this.props.handleEditSubmit(this.props.info, this.state);
        this.setState({
            firstName: '',
            lastName: '',
            type: '',
            bountyAmount: ''
        })
    }

    render(){
        const colorChoice = () => {
            const type = this.props.info.type.toUpperCase();
            if(type === 'JEDI'){
                return '#2119C780';
            } else if(type === 'SITH'){
                return '#99000080';
            } else if(type === 'ROBOT'){
                return '#AB7D3380';
            } else {
                return '#4B727580';
            }
        }

        const bountyTypeColor = {
            backgroundColor: colorChoice(),
            margin: '5px',
            border: '1px solid #aaa',
            boxShadow: '0px -1px 15px -1px rgba(0,0,0,0.51)',
            borderRadius: '3px'
        }

        return (
            <div style={bountyTypeColor}>
                <div className="bountyContainer">
                    { !this.state.isExpanded ?
                    <div className="bountyTitleContainer">
                        <h1><button onClick={this.handleDisplayExpand}
                                className="dropdownBtnStyle"> V </button>
                            {this.props.info.firstName} {this.props.info.lastName}
                        </h1>
                    </div>
                    :
                    <div className="expandedBountyContainer">
                        { this.state.isEditing ?
                            <div>
                                <input
                                    type="text"
                                    placeholder="New First Name"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}/>
                                <p>{this.state.firstName}</p>
                                <input
                                    type="text"
                                    placeholder="New Last Name"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}/>
                                <p>{this.state.lastName}</p>
                            </div>
                        :
                            <div>
                                <h1><button onClick={this.handleDisplayExpand}
                                        className="dropdownBtnStyle"> ^ </button>
                                    {this.props.info.firstName} {this.props.info.lastName}
                                </h1>
                            </div>
                        }
                        <div className="expandedBountyDetailsContainer">
                        { this.state.isEditing ?
                            <div>
                                <input
                                    type="text"
                                    placeholder="New Type"
                                    name="type"
                                    value={this.state.type}
                                    onChange={this.handleChange}
                                />
                                <p>{this.state.type}</p>
                            </div>
                        :
                            <div>
                                <span className="titleTypeSpan">Type: </span>
                                <span className="titleInfoSpan">{this.props.info.type}</span>
                            </div>
                        }
                        { this.state.isEditing ?
                            <div>
                                <input
                                    type="text"
                                    placeholder="New Bounty"
                                    name="bountyAmount"
                                    value={this.state.bountyAmount}
                                    onChange={this.handleChange}
                                />
                                <p>{this.state.bountyAmount}</p>
                            </div>
                        :
                            <div>
                                <span className="bountyTypeSpan">Bounty $:</span>
                                <span className="bountyInfoSpan">{this.props.info.bountyAmount}</span>
                            </div>
                        }
                                { this.state.isEditing ?
                                    <div className="editingContainer">
                                        <button onClick={this.handleEditFieldUpdate}>Update Bounty</button>
                                        <button onClick={this.handleEditDisplay}>Close Edit</button>
                                    </div>
                                :
                                    <div>
                                        <button onClick={this.handleEditDisplay}>Edit</button>
                                        <button onClick={()=>this.props.handleDeleteBounty(this.props.info._id)}>Delete</button>
                                    </div>
                                }

                        </div>
                    </div>
                    }
                </div>
                </div>
            )
        }
    }

export default Bounty;
