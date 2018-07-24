import React from 'react'
import { connect } from 'react-redux'
import Form from '../shared/Form'
import Toggle from '../shared/Toggle'
import AuthForm from './AuthForm'
import { signup, login } from '../redux/auth'


const AuthContainer = props => {
    const { signup, login } = props
    return (
        <div>
            <Toggle render={({ isToggled, toggle }) =>
            <React.Fragment>           
                { isToggled 
                    ? <div onClick={ toggle }>
                        <span style={{ backgroundColor: '#333', color: "cornflowerblue"}}>Sign Up</span>
                        <span>Login</span>
                        </div>
                    : <div onClick={ toggle }>
                        <span>Sign Up</span>
                        <span style={{ backgroundColor: '#333', color: "cornflowerblue"}}>Login</span>
                        </div>
                }
                { isToggled 
                    ?   <label> Sign Up
                            <Form 
                                reset
                                submit={ inputs => signup( inputs ) }
                                inputs={{ username: "", password: "" }}
                                render={ props => <AuthForm {...props} />}
                            />
                        </label>
                    :   <label> Login
                            <Form 
                                reset
                                submit={ inputs => login( inputs ) }
                                inputs={{ username: "", password: "" }}
                                render={ props => <AuthForm {...props} />}
                            />
                        </label>
                    }   
            </React.Fragment>
            }/>
        </div>
    )
}

export default connect(state=>state, { signup, login })(AuthContainer)