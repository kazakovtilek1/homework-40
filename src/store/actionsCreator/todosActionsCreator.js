import {types} from "../types";


function createTodoActionCreator (input) {
    return {
        type: types.CREATE_TODO,
        payload: input
    }
}

function deleteTodoActionCreator (id) {
    return {
        type: types.DELETE_TODO,
        payload: id
    }
}

function changeStatusActionCreator ({id, checked}) {
    return {
        type: types.CHANGE_STATUS,
        payload: {id, checked}
    }
}

function clearListActionCreator () {
    return {
        type: types.CLEAR_TODO
    }
}

function changeTodoActionCreator ({id, input}) {
    return {
        type: types.CHANGE_TODO,
        payload: {id, title: input}
    }
}


export {createTodoActionCreator, deleteTodoActionCreator, changeStatusActionCreator, clearListActionCreator, changeTodoActionCreator};