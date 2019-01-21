import * as actionCreators from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
    results: []
}

const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.Actions.STORE_RESULT:
            return updateObject(state, {
                results: state
                    .results
                    .concat({
                        id: Date.now(),
                        value: action.result
                    })
            })
        case actionCreators.Actions.DELETE_RESULT:
            return updateObject(state, {
                results: state
                    .results
                    .filter(result => result.id !== action.id)
            })
        default:
            break;
    }
    return state;
};

export default actionReducer;