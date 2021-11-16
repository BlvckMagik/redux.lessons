import { SET_LANG } from './language.actions.js';

const languageReduser = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANG:
      return action.payload;

    default:
      return state;
  }
};

export default languageReduser;
