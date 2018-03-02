import React from 'react';
import TodoDisplay from './TodoDisplay';

function TodoList(props){
    const mappedTodos = props.todos.map((todo, index) => {
        return (
            <TodoDisplay
                info={todo}
                key={todo + index}
                deleteTodo={props.deleteTodo}
                handleComplete={props.handleComplete}
                completed={props.completed}
                edit={props.edit}
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
