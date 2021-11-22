export const filteredUsersList = state => {
  return state.usersList.filter(user =>
    user.name.toLowerCase().includes(state.filterText.toLowerCase())
  );
};

export const filterTextSelector = state => {
  return state.filterText;
};
