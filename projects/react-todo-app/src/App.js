import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import axios from 'axios';



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
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
                    todos: [response.data, ...prevState.todos]
                }
            })
        })
    }

    deleteTodo(todoID){
        axios.delete('https://api.vschool.io/nateJ/todo/' + todoID).then(response => {
            alert('Todo was successfully deleted.');
            this.setState(prevState => {
                return {
                    todos: prevState.todos.filter(todo => {
                        return (
                            todo._id !== todoID
                        )
                    })
                }
            })
        })
    }

    completeTodo(todoTitle){

    }

    render() {
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
                        completeTodo={this.completeTodo}
                    />
                </div>
            </div>
        )
    }
}

export default App;
