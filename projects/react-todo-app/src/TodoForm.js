import React from 'react';
import FormComponent from './FormComponent'


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        })
    }

    render(){
        return (
            <div className="todoFormDiv">
                <FormComponent
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    data={this.state}
                />
            </div>
        )
    }
}


export default TodoForm;
