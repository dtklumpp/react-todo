import React from 'react';
import Todo from './Todo.js';

const Todos = (props) => {
    const todos = props.todos.map((todo) => {
        return (
            <Todo
                key={todo._id}
                todo={todo}
                updateTodo={props.updateTodo}
                deleteTodo={props.deleteTodo}
            />
        )
    })

    return (
        <ul>
            {todos}
        </ul>
    )
}

export default Todos;
