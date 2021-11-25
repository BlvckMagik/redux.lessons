import { createStore, applyMiddleware, compose } from 'redux';
import counterReduser from './counter.reducer.js';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const store = createStore(counterReduser, applyMiddleware(logger));
export default store;
