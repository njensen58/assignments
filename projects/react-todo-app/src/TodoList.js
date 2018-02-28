import React from 'react';
import TodoComponent from './TodoComponent';

function TodoList(props){
    const mappedTodos = props.todos.map((todo, index) => {
        return (
            <TodoComponent
                info={todo}
                key={todo + index}
                deleteTodo={props.deleteTodo}
                handleComplete={props.handleComplete}
                completed={props.completed}
            />
        )
    })

    return (
        <div>
            {mappedTodos}
        </div>
    )
}

export default TodoList;
