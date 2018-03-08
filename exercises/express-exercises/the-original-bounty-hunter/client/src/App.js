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
            bounty: ''
        }
        this.handleDeleteBounty = this.handleDeleteBounty.bind(this);
        this.handleAddBounty = this.handleAddBounty.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            this.setState({
                bounties: response.data
            })
        })
    }

    handleAddBounty(){
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type,
            bounty: this.state.bounty
        }
        axios.post('/bounty', newBounty).then(response => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, response.data],
                firstName: '',
                lastName: '',
                type: '',
                bounty: ''
            }))
        })
    }

    render(){
        const mappedBounties = this.state.bounties.map(bounty => {
            return (
                <Bounty
                    key={bounty.id}
                    info={bounty}
                    handleDeleteBounty={this.handleDeleteBounty}
                />
            )
        })
        return (
            <div>
                <div>
                    <BountyControls
                        handleAddBounty={this.handleAddBounty}
                        handleChange={this.handleChange}
                        info={this.state}
                    />
                </div>
                <div>
                    {mappedBounties}
                </div>
            </div>
        )
    }
}

export default App;
