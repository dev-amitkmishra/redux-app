import * as actionCreators from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.Actions.INCREMENT:
            return updateObject(state, {
                counter: state.counter + 1
            })
        case actionCreators.Actions.DECREMENT:
            return updateObject(state, {
                counter: state.counter - 1
            })
        case actionCreators.Actions.ADD:
            return updateObject(state, {
                counter: state.counter + action.value
            })
        case actionCreators.Actions.SUBTRACT:
            return updateObject(state, {
                counter: state.counter - action.value
            })
        default:
            break;
    }
    return state;
};

export default counterReducer;