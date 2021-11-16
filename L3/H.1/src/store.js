import { createStore, combineReducers } from 'redux';
import usersReducer from './user.reducer.js';
import languageReduser from './language.reducer.js';
import cartReducer from './cart.reducer.js';

const appReducer = combineReducers({
  language: languageReduser,
  users: usersReducer,
  cart: cartReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
