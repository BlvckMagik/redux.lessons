import React from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser } from './users.actions.js';

const Users = ({ usersList, addUser, deleteUser }) => {
  const createUser = () => {
    const id = Math.round(Math.random() * 1000000);
    addUser({
      id,
      name: id,
    });
  };

  return (
    <div className='users'>
      <button onClick={createUser} className='users__create-btn'>
        Create user
      </button>
      <ul className='users__list'>
        {usersList.map(user => (
          <li key={user.id} className='users__list-item'>
            <span>{`User # ${user.id}`}</span>
            <button
              onClick={() => deleteUser(user.id)}
              className='users__delete-btn'
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    usersList: state.usersList,
  };
};

const mapDispatch = {
  addUser,
  deleteUser,
};

const connector = connect(mapState, mapDispatch);

export default connector(Users);
