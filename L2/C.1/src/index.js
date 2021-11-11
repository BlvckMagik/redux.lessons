import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const counterReduser = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return (state = 0);

    default:
      return state;
  }
};

const store = createStore(counterReduser);
