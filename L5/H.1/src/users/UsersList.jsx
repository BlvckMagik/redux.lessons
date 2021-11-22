import React from 'react';
import { connect } from 'react-redux';
import { updateFilterText } from '../users.actions.js';
import Filter from './Filter.jsx';
import User from './User.jsx';
import { filteredUsersList, filterTextSelector } from '../users.selector.js';

const usersList = ({ usersList, filterText, updateFilterText }) => {
  return (
    <div>
      <Filter
        filterText={filterText}
        count={usersList.length}
        onChange={event => updateFilterText(event.target.value)}
      />
      <ul className='users'>
        {usersList.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    usersList: filteredUsersList(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  updateFilterText,
};

const connector = connect(mapState, mapDispatch);

export default connector(usersList);
