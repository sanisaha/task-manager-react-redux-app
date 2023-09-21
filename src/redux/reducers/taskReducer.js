import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return {}
        default:
            return state;
    }
}

export default taskReducer;