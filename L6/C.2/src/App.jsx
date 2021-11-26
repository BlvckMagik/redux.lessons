import React from 'react';
import { Provider } from 'react-redux';
import UserInfo from './UserInfo.jsx';
import SearchField from './SearchField.jsx';
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <div className='page'>
        <UserInfo />
        <SearchField />
      </div>
    </Provider>
  );
};

export default App;
