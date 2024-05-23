

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}



export function reducer (state = initialState, action) {

    if(action.type === "CREATE_TODO") {
        let id = 1
        if(state.todos.length > 0) {
            id = state.todos[state.todos.length - 1].id + 1
        }
        const newTodos = [...state.todos, {id, status: false, title: action.payload}]
        localStorage.setItem('todos', JSON.stringify(newTodos));
        return {
            ...state,
            todos: newTodos
        }
    }

    if(action.type === "DELETE_TODO") {
        const filteredTodos = state.todos.filter(todo => todo.id !== action.payload)
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
        return {
            ...state,
            todos: [...filteredTodos]
        }
    }

    if(action.type === "CHANGE_STATUS") {
        const newTodos = state.todos.map(todo => {
            if(todo.id === action.payload.id) {
                return {
                    ...todo,
                    status: action.payload.checked
                }
            }
            return todo
        })
        localStorage.setItem('todos', JSON.stringify(newTodos));
        return {
            ...state,
            todos:[...newTodos]
        }
    }

    if(action.type === "CLEAR_TODO") {
        localStorage.removeItem('todos');
        return {
            ...state,
            todos: []
        }
    }

    if(action.type === "CHANGE_TODO") {
        const changedTodos = state.todos.map(todo => {
            if(todo.id === action.payload.id) {
                return {
                    ...todo,
                    title: action.payload.title
                }
            }
            return todo
        })
        localStorage.setItem('todos', JSON.stringify(changedTodos));
        return {
            ...state,
            todos: [...changedTodos]
        }
    }

    return state
}