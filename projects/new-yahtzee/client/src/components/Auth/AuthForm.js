import React from 'react'


const AuthForm = props => {
    const { inputs, handleChange, handleSubmit } = props
    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" onChange={ handleChange } name="username" value={ inputs.username } placeholder="Username"/>
            <input type="text" onChange={ handleChange } name="password" value={ inputs.password } placeholder="Password"/>
            <button>Submit</button>
        </form>
    )
}

export default AuthForm;