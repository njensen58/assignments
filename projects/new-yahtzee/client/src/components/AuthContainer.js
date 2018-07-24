import React from 'react'
import { connect } from 'react-redux'
import Form from '../shared/Form'
import AuthForm from './AuthForm'
import { signup, login } from '../redux/auth'


const AuthContainer = props => {
    const { signup, login } = props
    return (
        <div>
            <label> Sign Up
                <Form 
                    reset
                    submit={ inputs => signup( inputs ) }
                    inputs={{ username: "", password: "" }}
                    render={ props => <AuthForm {...props} />}
                />
            </label>
            <label> Login
                <Form 
                    reset
                    submit={ inputs => login( inputs ) }
                    inputs={{ username: "", password: "" }}
                    render={ props => <AuthForm {...props} />}
                />
            </label>
        </div>
    )
}

export default connect(state=>state, { signup, login })(AuthContainer)