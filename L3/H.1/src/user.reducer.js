import { ADD_USER, DELETE_USER } from './user.actions.js';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER: {
      return action.payload;
    }

    case DELETE_USER: {
      return null;
    }

    default:
      return state;
  }
};

export default userReducer;
