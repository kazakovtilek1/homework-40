import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Todo from "../components/Todo";

function TodosPage() {
    const [input, setInput] = useState('');
    const {todos} = useSelector((store) => store);

    const dispatch = useDispatch();

    function createTodo () {
        dispatch({type: 'CREATE_TODO', payload: input});
        setInput('')
    }

    function deleteTodo(id) {
        dispatch({type: 'DELETE_TODO', payload: id});
    }

    function changeStatus(id, checked) {
        dispatch({type: 'CHANGE_STATUS', payload: {id, checked}});
    }

    function clearList () {
        dispatch({type: 'CLEAR_TODO'});
    }

    function changeTodo (id) {
        dispatch({type: 'CHANGE_TODO', payload: {id, title: input}});
        setInput('')
    }

    return (
        <div>
            <h2>Todos</h2>

            <input type="text" placeholder="todo"
            onInput={(e) => setInput(e.target.value)}/>
            <button onClick={createTodo}>Add todo</button>
            <button onClick={clearList}>Очистить список</button>
            {
                todos.length > 0 ?
                    todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}
                                           changeTodo={changeTodo}   changeStatus={changeStatus}/>) :
                    <p>Задач нет</p>
            }
        </div>
    );
}

export default TodosPage;