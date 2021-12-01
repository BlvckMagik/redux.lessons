import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import tesksReduser from './tasks/tasks.reduser';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  tasks: tesksReduser,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
