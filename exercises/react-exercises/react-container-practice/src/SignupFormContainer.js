import React from 'react';
import SignupForm from './SignupForm';

class SignupFormContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
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
        alert("Thanks for Submitting the form!")
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        })
    }

    render(){
        return(
            <SignupForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                {...this.state}
            />
        )
    }
}

export default SignupFormContainer;
