import React from 'react';
import axios from 'axios';
import Bounty from './Bounty';
import BountyControls from './BountyControls';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            bounties: [],
            firstName: '',
            lastName: '',
            type: '',
            bountyAmount: ''
        }
        this.handleDeleteBounty = this.handleDeleteBounty.bind(this);
        this.handleAddBounty = this.handleAddBounty.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
        axios.get('/bounty').then(response => {
            this.setState({
                bounties: response.data
            })
        })
    }

    handleDeleteBounty(id){
        axios.delete('/bounty/' + id).then(response => {
            alert('Bounty was removed successfully')
            axios.get('/bounty').then(response => {
                this.setState({
                    bounties: response.data
                })
            })
        })
    }

    handleAddBounty(){
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type,
            bountyAmount: this.state.bountyAmount
        }
        if(newBounty.firstName !== '' && newBounty.type !== '' && newBounty.bountyAmount !== ''){
            axios.post('/bounty', newBounty).then(response => {
                this.setState(prevState => ({
                    bounties: [...prevState.bounties, response.data],
                    firstName: '',
                    lastName: '',
                    type: '',
                    bountyAmount: ''
                }))
            })
        } else {
            alert('First Name, Type, and Bounty are required');
        }
    }

    handleEditSubmit(item, updatedFields){
        for(let key in updatedFields){
            if(updatedFields[key] !== ''){
                item[key] = updatedFields[key]
            }
        }
        axios.put('/bounty/' + item._id, item).then(response => {
            axios.get('/bounty').then(response => {
                this.setState({
                    bounties: response.data
                })
            })
        })
    }

    render(){
        const mappedBounties = this.state.bounties.map(bounty => {
            return (
                <Bounty
                    key={bounty._id}
                    info={bounty}
                    handleDeleteBounty={this.handleDeleteBounty}
                    handleEditSubmit={this.handleEditSubmit}
                />
            )
        })
        return (
            <div className="appContainer">
                <div className="bountyCtrlsContainer">
                    <BountyControls
                        handleAddBounty={this.handleAddBounty}
                        handleChange={this.handleChange}
                        info={this.state}
                    />
                </div>
                <div className="bountiesContainer">
                    {mappedBounties}
                </div>
            </div>
        )
    }
}

export default App;
