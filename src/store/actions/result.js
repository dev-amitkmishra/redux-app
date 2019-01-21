import * as actionTypes from './actionTypes';

// thunk should be used an utility
export const storeResult = (result) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: actionTypes.Actions.STORE_RESULT, result: result})
        }, 2000);
    }
};
export const deleteResult = (id) => {
    return {type: actionTypes.Actions.DELETE_RESULT, id: id}
};