import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Todo from "../components/Todo";
import {createTodoActionCreator, deleteTodoActionCreator, changeStatusActionCreator,
    clearListActionCreator, changeTodoActionCreator}
    from "../store/actionsCreator/todosActionsCreator";
import {changeTitleActionCreator} from "../store/actionsCreator/titleActionsCreator";

function TodosPage() {
    const [input, setInput] = useState('');
    const {todos} = useSelector((store) => store.todosR);
    const {title} = useSelector((store) => store.titleR);

    const dispatch = useDispatch();

    function createTodo () {
        dispatch(createTodoActionCreator(input));
        setInput('')
    }

    function deleteTodo(id) {
        dispatch(deleteTodoActionCreator(id));
    }

    function changeStatus(id, checked) {
        dispatch(changeStatusActionCreator({id, checked}));
    }

    function clearList () {
        dispatch(clearListActionCreator());
    }

    function changeTodo (id) {
        dispatch(changeTodoActionCreator({id, input}));
        setInput('')
    }

    function changeTitle () {
        dispatch(changeTitleActionCreator(input))
        setInput('')
    }

    return (
        <div>
            <h2>{title}</h2>

            <input type="text" placeholder="todo"
            onInput={(e) => setInput(e.target.value)} value={input}/>
            <button onClick={createTodo}>Add todo</button>
            <button onClick={clearList}>Очистить список</button>
            <button onClick={() => {createTodo(); changeTitle()}}>Change title from input</button>
            <button onClick={changeTitle}>Change title</button>
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