export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const addUser = ({ id, name }) => {
  return {
    type: ADD_USER,
    payload: {
      id,
      name,
    },
  };
};

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const updateUser = (id, userData) => {
  return {
    type: UPDATE_USER,
    payload: { id, userData },
  };
};
