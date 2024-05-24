import {types} from "../types";

function changeTitleActionCreator(input) {
    return {
        type: types.CHANGE_TITLE,
        payload: {title: input}
    }
}


export {changeTitleActionCreator}