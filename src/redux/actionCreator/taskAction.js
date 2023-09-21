import { actionTypes } from "../actionTypes/actionTypes"

export const addTask = (data) => {
    return {
        type: actionTypes.ADD_TASK,
        payload: data
    }
}