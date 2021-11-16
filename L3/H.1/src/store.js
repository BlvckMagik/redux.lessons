import { createStore, combineReducers } from 'redux';
import userReducer from './user.reducer.js';
import languageReduser from './language.reducer.js';
import cartReducer from './cart.reducer.js';

const appReducer = combineReducers({
  language: languageReduser,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
