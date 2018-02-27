import React from 'react';


function NameForm(props){
    return (
        <div className="formOuterDiv">
            <form onSubmit={props.handleSubmit}>
                <div className="formDivTop">
                    <input
                        onChange={props.handleChange}
                        type="text"
                        name="firstName"
                        value={props.value.firstName}
                        placeholder="First Name"
                        className="inputsLeft"
                        required
                        />
                    <input
                        onChange={props.handleChange}
                        type="text"
                        name="lastName"
                        value={props.value.lastName}
                        placeholder="Last Name"
                        className="inputsRight"
                        required
                        />
                    <input
                        onChange={props.handleChange}
                        type="email"
                        name="email"
                        value={props.value.email}
                        placeholder="Email"
                        className="inputsLeft"
                        required
                        />
                    <input
                        onChange={props.handleChange}
                        type="text"
                        name="placeOfBirth"
                        value={props.value.placeOfBirth}
                        placeholder="Place of Birth"
                        className="inputsRight"
                        required
                        />
                    <input
                        onChange={props.handleChange}
                        type="number"
                        name="phone"
                        value={props.value.phone}
                        placeholder="Phone"
                        className="inputsLeft"
                        required
                        />
                    <input
                        onChange={props.handleChange}
                        type="text"
                        name="favFood"
                        value={props.value.favFood}
                        placeholder="Favorite Food"
                        className="inputsRight"
                        required
                        />
                </div>
                <div>
                    <textArea
                        onChange={props.handleChange}
                        name="aboutYou"
                        value={props.value.aboutYou}
                        className="aboutYou"
                        placeholder="Tell us about you"
                        required
                    >

                    </textArea>
                </div>
                <div className="submitBtn">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}


export default NameForm;
