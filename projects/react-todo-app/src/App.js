import React from 'react';
import TodoForm from './TodoForm';
import TodoComponent from './TodoComponent';
import axios from 'axios';



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('https://api.vschool.io/nateJ/todo/').then(response => {
            this.setState({
                todos: response.data
            })
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let newTodo = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            imgUrl: this.state.imgUrl
        }
        axios.post('https://api.vschool.io/nateJ/todo', newTodo)
        this.setState({
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        })
    }

    render() {
        const mappedTodos = this.state.todos.map((todo, index) => {
            return (
                <TodoComponent
                    title={todo.title}
                    description={todo.description}
                    img={todo.imgUrl}
                    key={todo + index}
                />
            )
        })

        return (
            <div className="appContainer">
                <div className="todoFormContainer">
                    <TodoForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className="mappedTodosContainer">
                    {mappedTodos}
                </div>
            </div>
        )
    }
}

export default App;
