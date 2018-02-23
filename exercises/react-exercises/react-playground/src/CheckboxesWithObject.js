import React, {Component} from "react";

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            age: "",
            gender: "male",
            diet: {
                isKosher: false,
                isVegan: false,
                isNormal: false
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleDietCheckbox = this.handleDietCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            name: "",
            age: ""
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleDietCheckbox(e) {
        const name = e.target.name;
        const checked = e.target.checked;
        this.setState(prevState => {
            return {
                diet: {
                    ...prevState.diet,
                    [name]: checked
                }
            }
        });
    }

    render(){
        return (
            <div>
                <form name="info" onSubmit={this.handleSubmit}>
                    Enter your name:
                    <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        name="name"
                    />
                Enter your age:
                    <input
                        onChange={this.handleChange}
                        value={this.state.age}
                        name="age"
                        type="number"
                    />
                    <br/>
                    <input
                        type="checkbox"
                        value={this.state.diet.isKosher}
                        name="isKosher"
                        onChange={this.handleDietCheckbox}
                    />
                    <label>Kosher</label>
                    <br/>


                    <input
                        type="checkbox"
                        value={this.state.diet.isVegan}
                        name="isVegan"
                        onChange={this.handleDietCheckbox}
                    />
                    <label>Vegan</label>
                    <br/>

                    <input
                        type="checkbox"
                        value={this.state.diet.isNormal}
                        name="isNormal"
                        onChange={this.handleDietCheckbox}
                    />
                    <label>Normal</label>
                    <br/>

                    <button>submit</button>
                </form>

            </div>
        )
    }
}

export default Form;
