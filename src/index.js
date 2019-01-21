import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

// Reducer is for Sync code only
// Reducer is the only thing which would update the state
// Logic should be placed to Reducers(best practise)
const reducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});
const logger = store => {
    return next => {
        return action => {
            console.log('Middleware Req Dispatch', action);
            const result = next(action);
            console.log('Middleware next state', store.getState());
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// thunk library is for async calling
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));
// const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
