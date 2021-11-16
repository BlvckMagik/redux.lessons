export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const setUser = name => {
  return {
    type: ADD_USER,
    payload: {
      name,
    },
  };
};

export const removeUser = () => {
  return {
    type: DELETE_USER,
  };
};
