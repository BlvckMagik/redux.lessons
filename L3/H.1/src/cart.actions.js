export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const addProduct = ({ id, name }) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      id,
      name,
    },
  };
};

export const deleteProduct = id => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
