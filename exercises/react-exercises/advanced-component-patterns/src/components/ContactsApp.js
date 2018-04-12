import React, {Component} from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar'
import LoaderHOC from '../HOC/LoaderHOC';


class ContactsApp extends Component {
    state = {
        filterText: ''
    };

    handleUserInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <p>Load Time: {this.props.loadTime}</p>
                    <SearchBar filterText={this.state.filterText}
                               onUserInput={this.handleUserInput} />
                </div>
                <ContactList contacts={this.props.contacts}
                             filterText={this.state.filterText} />
                         <div style={{
                                 display: 'flex',
                                 justifyContent: 'center'
                             }}>
                    <button onClick={this.props.loadMoreUsers}
                            style={{
                                 padding: '5px 10px',
                                 margin: '20px 40px',
                                 fontSize: '16px',
                                 borderRadius: '5px',
                                 backgroundColor: '#333',
                                 color: '#ddd',
                                 outline: 'none'
                            }}>Load More Contacts
                    </button>
                    <div style={{
                            textAlign: 'right',
                            width: '100%'
                        }}>
                        <p style={{
                                marginRight: '40px'
                            }}>Page: {this.props.page}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoaderHOC('contacts')(ContactsApp);
