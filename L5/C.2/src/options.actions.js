export const TOGGLE_OPTION = 'TOGGLE_OPTION';

export const toggleOption = id => {
  return {
    type: TOGGLE_OPTION,
    payload: id,
  };
};
