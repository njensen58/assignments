import React from 'react';
import NameForm from './NameForm';
import BadgeDisplay from './BadgeDisplay';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favFood: '',
            aboutYou: 'Tell us about yourself',
            nameBadges: [],
            count: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const value = e.target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.firstName.length < 3 || this.state.lastName.length < 3 || this.state.phone.length < 3 || this.state.email.length < 3 || this.state.favFood.length < 3 || this.state.placeOfBirth.length < 3 || this.state.aboutYou.length < 3){
            alert("All entries must be at least 3 characters long")
        } else {
            if(this.state.phone.length !== 10 || !Number(this.state.phone)){
                alert("Enter a valid 10 digit phone number")
            } else {
                let newNameBadge = this.state
                this.setState(prevState => ({
                    firstName: '',
                    lastName: '',
                    email: '',
                    placeOfBirth: '',
                    phone: '',
                    favFood: '',
                    aboutYou: 'Tell us about yourself',
                    nameBadges: [...prevState.nameBadges, newNameBadge],
                    count: prevState.count + 1
                }))
            }
        }
    }

    render(){
        return (
            <div className="appContainer">
                <div className="formContainer">
                    <NameForm
                        handleSubmit={this.handleSubmit}
                        value={this.state}
                        handleChange={this.handleChange}
                    />
                </div>
                <div className="badgeDisplayContainer">
                    <BadgeDisplay
                        info={this.state}/>
                </div>
            </div>
        )
    }
}

export default App;
