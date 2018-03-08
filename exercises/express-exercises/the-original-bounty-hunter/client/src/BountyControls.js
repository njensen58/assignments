import React from 'react';

class BountyControls extends React.Component{
    constructor(){
        super();
        this.state = {
            isAddingBounty: false
        }
        this.handleAddingBounty = this.handleAddingBounty.bind(this);
    }

    handleAddingBounty(){
        this.setState(prevState => ({
            isAddingBounty: prevState.isAddingBounty ? false : true
        }))
    }

    render(){
        return (
            <div className="bountyCtrlsDiv">
            { !this.state.isAddingBounty ?
                <div>
                    <button onClick={this.handleAddingBounty} className="addBountyBtn">Add Bounty</button>
                </div>
            :
                <div>
                    <div>
                        <button onClick={this.handleAddingBounty} className="addBountyBtn">Close</button>
                    </div>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={this.props.handleChange}
                        value={this.props.info.firstName}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={this.props.handleChange}
                        value={this.props.info.lastName}
                    />
                    <input
                        type="text"
                        placeholder="Type (jedi, sith, robot)"
                        name="type"
                        onChange={this.props.handleChange}
                        value={this.props.info.type}
                    />
                    <input
                        type="text"
                        placeholder="Bounty"
                        name="bountyAmount"
                        onChange={this.props.handleChange}
                        value={this.props.info.bountyAmount}
                    />
                <button onClick={this.props.handleAddBounty} className="addNewBountyBtn">Add New Bounty</button>
            </div>
            }
        </div>
        )
    }
}

export default BountyControls;
