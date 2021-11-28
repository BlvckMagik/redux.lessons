import { WEATHER_DATA_RECIEVED } from './user.actions.js';

const userReduser = (state = [], action) => {
  switch (action.type) {
    case WEATHER_DATA_RECIEVED:
      return action.payload;

    default:
      return state;
  }
};

export default userReduser;
