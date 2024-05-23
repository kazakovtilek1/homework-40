import React from 'react';

function Todo({todo, deleteTodo, changeStatus, changeTodo}) {
    return (
        <div className="todo">
            <input type="checkbox" checked={todo.status} onChange={(e) => changeStatus(todo.id, e.target.checked)}/>
            <p className={todo.status && 'checkedTodo'}>{todo.title}</p>
            <button onClick={() => changeTodo(todo.id)}>Change todo</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}



export default Todo;