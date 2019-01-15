import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.Actions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.Actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.Actions.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.Actions.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            break;
    }
    return state;
};

export default counterReducer;