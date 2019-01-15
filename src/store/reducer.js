// import * as actionTypes from './actions';

// const initialState = {
//     counter: 0,
//     results: []
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.Actions.INCREMENT:
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case actionTypes.Actions.DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         case actionTypes.Actions.ADD:
//             return {
//                 ...state,
//                 counter: state.counter + action.value
//             }
//         case actionTypes.Actions.SUBTRACT:
//             return {
//                 ...state,
//                 counter: state.counter - action.value
//             }
//         case actionTypes.Actions.STORE_RESULT:
//             return {
//                 ...state,
//                 results: state
//                     .results
//                     .concat({
//                         id: Date.now(),
//                         value: state.counter
//                     })
//             }
//         case actionTypes.Actions.DELETE_RESULT:
//             return {
//                 ...state,
//                 results: state
//                     .results
//                     .filter(result => result.id !== action.id)
//             }
//         default:
//             break;
//     }
//     return state;
// };

// export default reducer;