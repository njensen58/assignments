import React from 'react';

function Form(props){
    return (
        <form>
            <div>
                <label>
                    First Name
                    <input
                    type="text"
                    name="firstName"
                    value={props.value.firstName}
                    onChange={props.handleChange}/>
                </label>
            </div>
            <br />
            <div>
                <label>Last Name
                    <input
                    type="text"
                    name="lastName"
                    value={props.value.lastName}
                    onChange={props.handleChange}/>
                </label>
            </div>
            <br/>
            <div>
                <label>Age
                    <input
                    type="number"
                    name="age"
                    value={props.value.age}
                    onChange={props.handleChange}/>
                </label>
            </div>
            <br />
            <div>
                <select value={props.value.fruits} onChange={props.handleChange}>
                    <option value="apples">Apples</option>
                    <option value="oranges">Oranges</option>
                    <option value="bananas">Bananas</option>
                </select>
            </div>
            <br />
            <div>
                <label>Male
                    <input
                    type="checkbox"
                    name="gender"
                    value="male"/></label>
                <label>Female
                    <input
                    type="checkbox"
                    name="gender"
                    value="female"/></label>
                <label>Other
                    <input
                    type="checkbox"
                    name="gender"
                    value="other"/></label>
            </div>
            <h1>{props.value}</h1>
        </form>
    )
}

export default Form;
