import { createStore, combineReducers } from 'redux';
import usersReducer from './users.reducer.js';
import counterReduser from './counter.reducer.js';

const appReducer = combineReducers({
  counter: counterReduser,
  users: usersReducer,
});

const store = createStore(appReducer);
export default store;
