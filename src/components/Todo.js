import React from 'react';

class Todo extends React.Component {

    deleteClickedTodo = () => {
        this.props.deleteTodo(this.props.todo);
    }




    render() {
        return (
            <div>
                <li data-todos-index={this.props.todo_id}>
                    <span className="todo-item">{this.props.todo.body}</span>
                    <span
                        className='remove'
                        onClick={this.deleteClickedTodo}
                    >Remove</span>
                </li>
            </div>
        )
    }
}

export default Todo;
