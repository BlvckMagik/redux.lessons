import { createStore } from 'redux';
import counterReduser from './users.reducer.js';

const store = createStore(
  counterReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
