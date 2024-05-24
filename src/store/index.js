import {combineReducers, createStore} from 'redux';
import {todoReducer} from "./reducers/todoReducer";
import {titleReducer} from "./reducers/titleReducer";


const rootReducer = combineReducers({
    titleR: titleReducer,
    todosR: todoReducer
})


export const store = createStore(rootReducer);