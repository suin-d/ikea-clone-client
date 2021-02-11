import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import user from './user';
import interfaces from './interface';
import product from './product';

const persistConfig = {
  key: 'ikea',
  storage: storageSession,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user,
  product,
  interfaces,
});

export default persistReducer(persistConfig, rootReducer);
