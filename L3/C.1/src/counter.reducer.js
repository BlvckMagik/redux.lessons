import { INCREMENT, DECREMENT, RESET } from './counter.actions.js';

const initState = {
  value: 0,
  history: [],
};

const counterReduser = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
        history: state.history.concat('+1'),
      };
    case DECREMENT:
      return {
        value: state.value - 1,
        history: state.history.concat('-1'),
      };
    case RESET:
      return {
        value: 0,
        history: [],
      };

    default:
      return state;
  }
};

export default counterReduser;
