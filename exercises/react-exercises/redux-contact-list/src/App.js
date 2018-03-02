import React from 'react';
import { connect } from 'react-redux';
import { addContact } from './redux';
import ContactListDisplay from './ContactListDisplay'



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(){
        this.props.addContact(this.state)
        this.setState({
            name: '',
            phone: ''
        })
    }

    render(){
        const mappedContacts = this.props.contactList.map(contact => {
            return (
                <ContactListDisplay
                    key={contact.name}
                    name={contact.name}
                    phone={contact.phone}
                />
            )
        })
        return (
            <div>
                <div>

                    <input
                        type="text"
                        placeholder="New Contact Name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        onChange={this.handleChange}
                        value={this.state.phone}
                    />
                    <button onClick={this.handleClick}>Add Contact</button>

                </div>
                <div>
                    {mappedContacts}
                </div>
            </div>
        );
    }
}

export default connect(state=>state, {addContact})(App);
