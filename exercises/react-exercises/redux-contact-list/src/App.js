import React from 'react';
import { connect } from 'react-redux';
import { contactList } from './redux';
import { addContact } from './redux';
import ContactListDisplay from './ContactListDisplay'



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.store.dispatch(addContact(this.state))
    }

    render(){
        const mappedContacts = contactList.map(contact => {
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
                    <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="New Contact Name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.value}
                        />
                    <button>Add Contact</button>
                    </form>
                </div>
                <div>
                    {mappedContacts}
                </div>
            </div>
        );
    }
}

export default connect(state=>state, {contactList, addContact})(App);
