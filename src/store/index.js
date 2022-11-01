import { combineReducers } from 'redux';

import triplog from './modules/triplog';
import detail from './modules/detail';

export default combineReducers({
  triplog,
  detail,
});
