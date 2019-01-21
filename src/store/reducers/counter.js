import * as actionCreators from '../actions/actionTypes';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.Actions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionCreators.Actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionCreators.Actions.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionCreators.Actions.SUBTRACT:
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