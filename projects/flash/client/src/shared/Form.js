import { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = { inputs: this.props.inputs }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    validateInputs = obj => {
        for(let key in obj){
            if(obj[key] === ''){
                return false
            }
        }
        return true
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.validateInputs(this.state.inputs)){
            this.props.submit( this.state.inputs )
            this.props.reset && this.setState({ inputs: this.props.inputs })
        } else {
            alert("all fields are required")
        }
    }

    render(){
        return this.props.render({
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            inputs: this.state.inputs
        })
    }
}
