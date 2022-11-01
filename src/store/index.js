import { combineReducers } from 'redux';

import triplog from './modules/triplog';
import detail from './modules/detail';
import budget from './modules/budget';

export default combineReducers({
  triplog,
  detail,
  budget,
});
