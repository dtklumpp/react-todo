import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <li data-todos-index={this.props.todo_id}>
                    <span className="todo-item">{this.props.todo.body}</span>
                </li>
            </div>
        )
    }
}

export default Todo;
