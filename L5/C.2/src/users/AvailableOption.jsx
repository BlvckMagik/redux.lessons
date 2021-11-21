import { AvailableOptionsSelector } from '../options.selector.js';
import { connect } from 'react-redux';
import Options from './Options.jsx';
import { toggleOption as moveOption } from '../options.actions.js';

const mapState = state => {
  return {
    options: AvailableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption,
};

const connector = connect(mapState, mapDispatch);

export default connector(Options);
