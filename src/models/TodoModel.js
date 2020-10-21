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

    static delete = (todo) => {
        const request = axios.delete(`${URL}/${todo._id}`);
        return request;
    }

    static update = (todo) => {
        const request = axios.put(`${URL}/${todo._id}`, todo);
        return request;
    }
}

export default TodoModel;
