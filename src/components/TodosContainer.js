import React from 'react';
import TodoModel from '../models/TodoModel';
import Todos from './Todos.js';
import CreateTodoForm from './CreateTodoForm.js';

class TodosContainer extends React.Component {

    state = {
        todos: [],
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        TodoModel.all().then((res) => {
            this.setState({
                todos: res.data.todos,
            })
        })
    }

    createTodo = (todo) => {
        const newTodo = {
            body: todo,
            completed: false,
        }

        TodoModel.create(newTodo).then((res) => {
            const todos = this.state.todos;
            todos.push(res.data);
            this.setState({todos: todos});
        })
    }

    // After the todo delete response is sent back from the server, we find the corresponding entry for the todo in our todos state array and remove it.
    deleteTodo = (todo) => {
        TodoModel.delete(todo).then((res) => {
            const todos = this.state.todos.filter((todo) => {
                return todo._id !== res.data._id;
            })
            this.setState({todos});
        })
    }

    render() {

        // TodoModel.all().then(
        //     (res) => {console.log(res)}
        // );

        return (

            <div className="todosComponent">
                <h3>todos container page</h3>
                <CreateTodoForm createTodo={this.createTodo} />
                <Todos 
                    todos={this.state.todos} 
                    deleteTodo={this.deleteTodo}
                />
            </div>
        )
    }
}

export default TodosContainer;
