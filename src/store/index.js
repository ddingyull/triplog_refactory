import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import triplog from './modules/triplog';
import detail from './modules/detail';
import budget from './modules/budget';
import users from './modules/users';
import check from './modules/check';
import image from './modules/image';
import review from './modules/review';
import like from './modules/like';

const persistConfig = {
  key: 'user',
  storage: storageSession,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['users', 'triplog'],
  // blacklist -> 그것만 제외합니다
};

export const rootReducer = combineReducers({
  triplog,
  detail,
  budget,
  users,
  check,
  image,
  review,
  like,
});

export default persistReducer(persistConfig, rootReducer);
