import React, {Component} from "react";

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            age: "",
            gender: "male",
            diet: []
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
        // e.persist();
        const name = e.target.name;
        const checked = e.target.checked;

        if (checked) {
            this.setState(prevState => {
                return {
                    diet: [...prevState.diet, name]
                }
            })
        } else {
            this.setState(prevState => {
                const removeItemArr = prevState.diet.filter(item => item !== name);
                return {
                    diet: removeItemArr
                }
            })
        }



        // this.setState(prevState => {
        //     return {
        //         diet: {
        //             ...prevState.diet,
        //             [name]: checked
        //         }
        //     }
        // });
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
                        name="kosher"
                        onChange={this.handleDietCheckbox}
                    />
                    <label>Kosher</label>
                    <br/>


                    <input
                        type="checkbox"
                        value={this.state.diet.isVegan}
                        name="vegan"
                        onChange={this.handleDietCheckbox}
                    />
                    <label>Vegan</label>
                    <br/>

                    <input
                        type="checkbox"
                        value={this.state.diet.isNormal}
                        name="normal"
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
