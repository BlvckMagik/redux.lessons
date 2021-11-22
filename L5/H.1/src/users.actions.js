export const UPDATE_FILTER_TEXT = 'UPDATE_FILTER_TEXT';

export const updateFilterText = text => {
  return {
    type: UPDATE_FILTER_TEXT,
    payload: text,
  };
};
