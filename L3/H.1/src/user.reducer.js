import { ADD_USER, DELETE_USER } from './user.actions.js';

const usersReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case DELETE_USER: {
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
