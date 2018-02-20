import React from 'react';
import TodoComponent from './TodoComponent';
import axios from 'axios';

class TodoList extends React.Component {
  constructor() {
    super();
    // This is how you define all the data we foresee getting updated.
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    axios.get('https://api.vschool.io/nateJ/todo').then(response => {
      this.setState({
          todos: response.data
      })
    })
  }
  render() {
    const container = {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr 1fr'
    }

    const todosStyle = {
      textAlign: 'center',
      gridColumn: '2'
    }

    const todosLi = {
      backgroundColor: '#ddd',
      textAlign: 'center',
      gridColumn: '2'
    }

    const mappedTodos = this.state.todos.map((todo, index) => {
      return (
        <TodoComponent
          key={todo.title + '-' + index}
          title={todo.title}
          description={todo.description}
          price={todo.price || "$FREE"}
        />
      )
    })

    return (
      <div style={container}>
        <div style={todosStyle}>
          <h1>Todo List</h1>
        </div>
        <div style={ todosLi }>
          {mappedTodos}
        </div>
      </div>
    )
  }
}

export default TodoList;
