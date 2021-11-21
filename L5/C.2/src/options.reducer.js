import { TOGGLE_OPTION } from './options.actions.js';

const options = [
  {
    id: 'id-0',
    name: '19-inch wheels',
  },
  {
    id: 'id-1',
    name: 'Leather-trimmed Sport Seats',
  },
  {
    id: 'id-2',
    name: 'B&O Sound System',
  },
  {
    id: 'id-3',
    name: 'Adaptive Cruise Control',
  },
  {
    id: 'id-4',
    name: 'Daytime running lights',
  },
  {
    id: 'id-5',
    name: 'Auto High-Beam Headlamps',
  },
  {
    id: 'id-6',
    name: 'Carbon Sport Interior',
  },
];

const initState = {
  optionsList: options,
  selected: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION: {
      const optId = action.payload;
      const isSelected = state.selected.includes(optId);
      const newSelectedOpt = isSelected
        ? state.selected.filter(id => id !== optId)
        : state.selected.concat(optId);

      return {
        ...state,
        selected: newSelectedOpt,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
