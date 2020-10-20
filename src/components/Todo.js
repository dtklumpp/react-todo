import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <h5>hello there todo</h5>
                <li data-todos-index={this.props.todo_id}>
                    <span className="todo-item">{this.props.todo.body}</span>
                </li>
            </div>
        )
    }
}

export default Todo;
