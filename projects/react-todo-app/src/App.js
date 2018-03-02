import React from 'react';
import TodoForm from './Form';
import TodoList from './TodoList'
import axios from 'axios';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount(){
        axios.get('https://api.vschool.io/nateJ/todo/').then(response => {
            this.setState({
                todos: response.data
            })
        })
    }

    addTodo(todo){
        axios.post('https://api.vschool.io/nateJ/todo', todo).then(response => {
            this.setState((prevState) => {
                return {
                    todos: [...prevState.todos, response.data]
                }
            })
        })
    }

    deleteTodo(id){
        axios.delete('https://api.vschool.io/nateJ/todo/' + id).then(response => {
            alert('Todo was successfully deleted.');
            this.setState(prevState => {
                return {
                    todos: prevState.todos.filter(todo => {
                        return (
                            todo._id !== id
                        )
                    })
                }
            })
        })
    }

    handleComplete(id){
        const indexOfItemToEdit = this.state.todos.findIndex(todo => {
            return todo._id === id;
        })
        const isComplete = this.state.todos[indexOfItemToEdit].completed;
        const newBool = !isComplete;
        axios.put('https://api.vschool.io/nateJ/todo/' + id, {completed: newBool}).then(response => {
            this.setState(prevState => {
                const copy = [...prevState.todos];
                copy.splice(indexOfItemToEdit, 1, response.data);
                return {todos: copy}
            })
        })
    }

    handleEdit(editedTodo, id){
        const indexOfItemToEdit = this.state.todos.findIndex(todo => {
            return todo._id === id;
        })
        axios.put('https://api.vschool.io/nateJ/todo/' + id, editedTodo).then(response=>{
            this.setState(prevState =>{
                const copy = [...prevState.todos];
                copy.splice(indexOfItemToEdit, 1, response.data);
                return {todos: copy}
            })
        })
    }

    render(){
        return (
            <div className="appContainer">
                <div className="todoFormContainer">
                    <TodoForm
                        addTodo={this.addTodo}
                    />
                </div>
                <div className="mappedTodosContainer">
                    <TodoList
                        todos={this.state.todos}
                        deleteTodo={this.deleteTodo}
                        handleComplete={this.handleComplete}
                        edit={this.handleEdit}
                    />
                </div>
            </div>
        )
    }
}

export default App;
