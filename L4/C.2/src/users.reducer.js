import { ADD_USER, DELETE_USER } from './users.actions.js';

const initState = {
  usersList: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const newUser = action.payload;

      return {
        ...state,
        usersList: [...state.usersList].concat(newUser),
      };
    }

    case DELETE_USER: {
      const newUsersList = state.usersList.filter(
        el => el.id !== action.payload
      );

      return {
        ...state,
        usersList: newUsersList,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
