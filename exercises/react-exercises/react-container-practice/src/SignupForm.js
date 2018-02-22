import React from 'react';

const SignupForm = props => {
        return (
            <form onSubmit={props.handleSubmit}>
                <label>
                    First Name
                    <input
                        type="text"
                        onChange={props.handleChange}
                        name="firstName"
                        value={props.firstName}
                    />
                </label>
                    <br/>
                <label>
                    Last Name
                    <input
                        type="text"
                        onChange={props.handleChange}
                        name="lastName"
                        value={props.lastName}
                    />
                </label>
                    <br/>
                <label>
                    Email
                    <input
                        type="email"
                        onChange={props.handleChange}
                        name="email"
                        value={props.email}
                    />
                </label>
                    <br/>
                <label>
                    Password
                    <input
                        type="password"
                        onChange={props.handleChange}
                        name="password"
                        value={props.password}
                    />
                </label>
                    <br/>
                <label>
                    Password Confirm
                    <input
                        type="password"
                        onChange={props.handleChange}
                        name="passwordConfirm"
                        value={props.passwordConfirm}
                    />
                </label>
                <button>Submit</button>
            </form>
        )
    }


export default SignupForm;
