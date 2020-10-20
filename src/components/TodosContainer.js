import React from 'react';
import TodoModel from '../models/TodoModel';
import Todos from './Todos.js';

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

    render() {

        TodoModel.all().then(
            (res) => {console.log(res)}
        );

        return (

            <div className="todosComponent">
                <h3>todos container page</h3>
                <Todos todos={this.state.todos} />
            </div>
        )
    }
}

export default TodosContainer;
