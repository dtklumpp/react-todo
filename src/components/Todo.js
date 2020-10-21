import React from 'react';
import TodoForm from './TodoForm.js';


class Todo extends React.Component {

    state = {
        formStyle: {
            display: 'none',
        }
    }

    deleteClickedTodo = () => {
        this.props.deleteTodo(this.props.todo);
    }

    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none'} })
        : this.setState({ formStyle: {display: 'block'} });
    }


    render() {
        return (
            <div>
                <li data-todos-index={this.props.todo_id}>
                    <div>
                        <span className="todo-item">{this.props.todo.body}</span>
                        <span
                            className='edit'
                            onClick={this.toggleBodyForm}
                        >Edit</span>
                        <span
                            className='remove'
                            onClick={this.deleteClickedTodo}
                        >Remove</span>
                    </div>
                    <TodoForm 
                        todo={this.props.todo}
                        style={this.state.formStyle}
                        autoFocus={true}
                        updateTodo={this.props.updateTodo}
                        toggleBodyForm={this.toggleBodyForm}
                    />
                </li>
            </div>
        )
    }
}

export default Todo;
