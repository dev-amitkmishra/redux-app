import * as actionTypes from './actionTypes';
export const increment = () => {
    return {type: actionTypes.Actions.INCREMENT}
};
export const decrement = () => {
    return {type: actionTypes.Actions.DECREMENT}
};
export const add = (val) => {
    return {type: actionTypes.Actions.ADD, value: val}
};
export const subtract = (val) => {
    return {type: actionTypes.Actions.SUBTRACT, value: val}
};