import React from 'react';
import TodoComponent from './TodoComponent';

function TodoList(props){
    const mappedTodos = props.todos.map((todo, index) => {
        return (
            <TodoComponent
                title={todo.title}
                description={todo.description}
                price={todo.price}
                imgUrl={todo.imgUrl}
                key={todo + index}
                deleteTodo={props.deleteTodo}
                completeTodo={props.completeTodo}
                id={todo._id}
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
