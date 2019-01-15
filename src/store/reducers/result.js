import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.Actions.STORE_RESULT:
            return {
                ...state,
                results: state
                    .results
                    .concat({
                        id: Date.now(),
                        value: action.result
                    })
            }
        case actionTypes.Actions.DELETE_RESULT:
            return {
                ...state,
                results: state
                    .results
                    .filter(result => result.id !== action.id)
            }
        default:
            break;
    }
    return state;
};

export default actionReducer;