import axios from 'axios';

const URL = 'https://super-crud.herokuapp.com/todos';

class TodoModel {
    static all = () => {
        const request = axios.get(URL);
        return request;
    }

    static create = (todo) => {
        const request = axios.post(URL, todo);
        return request;
    }
}

export default TodoModel;
