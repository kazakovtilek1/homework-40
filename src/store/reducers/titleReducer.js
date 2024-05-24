import {types} from "../types";

const initialState = {
    title: "Old title"
}

export function titleReducer(state = initialState, action) {

    switch (action.type) {
        case types.CHANGE_TITLE: {
            return {
                title: action.payload.title
            }
        }


        default: return state
    }

    return state
}