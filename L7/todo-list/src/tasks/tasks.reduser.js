import { TASKS_LIST_RECIEVED } from './tasks.actions';

const initState = {
  tasks: [],
};

const tesksReduser = (state = initState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECIEVED:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default tesksReduser;
