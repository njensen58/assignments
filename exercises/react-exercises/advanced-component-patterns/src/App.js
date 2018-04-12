import React, { Component } from 'react';
import ContactsApp from './components/ContactsApp';


class App extends Component {
    state = { contacts: [], page: 1 }

    componentDidMount(){
        fetch('https://randomuser.me/api/?format=json&results=100&exc=location,login,registered,dob,phone,cell,nat')
        .then(response => response.json())
        .then(contacts => this.setState({contacts: contacts.results}));
    }

    loadMoreUsers = () => {
        fetch('https://randomuser.me/api/?format=json&results=100&exc=location,login,registered,dob,phone,cell,nat')
        .then(response => response.json())
        .then(contacts =>
            this.setState(prevState => ({
                page: prevState.page + 1,
                contacts: [...prevState.contacts, ...contacts.results]
            })))
    }

    render(){
        return (
            <div>
                <ContactsApp
                    contacts={this.state.contacts}
                    page={this.state.page}
                    loadMoreUsers={this.loadMoreUsers}
                    />
            </div>
        )
    }
}

export default App;
