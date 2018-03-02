import React from 'react';
import TodoComponent from './TodoComponent';
import EditComponent from './EditComponent';


class TodoDisplay extends React.Component {
    constructor(){
        super();
        this.state = {
            isEditing: false,
            newTitle: '',
            newDescription: '',
            newPrice: ''
        }
        this.handleToggleEdit = this.handleToggleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleToggleEdit(){
        this.setState(prevState => {
            return {isEditing: true}
        })
    }

    handleEdit(){
        this.setState(prevState => {
            return {isEditing: false}
        })
        this.props.edit({
            title: this.state.newTitle,
            description: this.state.newDescription,
            price: this.state.newPrice
        }, this.props.info._id)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

        return (
            <div>
            { this.state.isEditing === false ?
                <TodoComponent
                    deleteTodo={this.props.deleteTodo}
                    handleToggleEdit={this.handleToggleEdit}
                    handleComplete={this.props.handleComplete}
                    info={this.props.info}
                />
            :
                <EditComponent
                    handleChange={this.handleChange}
                    handleEdit={this.handleEdit}
                    info={this.state}
                />
            }
            </div>
        )
    }
}

export default TodoDisplay;
