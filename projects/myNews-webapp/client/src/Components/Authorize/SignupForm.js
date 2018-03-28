import React from 'react';

function SignupForm(props){
    return (
        <div className="signupFormContainer">
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.value.username}
                    onChange={props.handleChange}
                    name="username"
                    placeholder="Username"
                />
                <input
                    type="text"
                    value={props.value.password}
                    onChange={props.handleChange}
                    name="password"
                    placeholder="Password"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignupForm;
