export const optionsListSelector = state => {
  return state.optionsList;
};

export const selectedOptSelector = state => {
  return state.selected;
};

export const AvailableOptionsSelector = state => {
  return state.optionsList.filter(opt => !state.selected.includes(opt.id));
};

export const SelectedOptionSelector = state => {
  return state.optionsList.filter(opt => state.selected.includes(opt.id));
};
