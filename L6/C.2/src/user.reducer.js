import { SHOW_SPINNER, USER_DATA_RECIEVED } from './user.actions.js';

const initState = {
  isFetching: false,
  userData: null,
};

const userReduser = (state = initState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_DATA_RECIEVED:
      return {
        ...state,
        userData: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default userReduser;
