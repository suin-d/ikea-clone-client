import { combineReducers } from 'redux';
import user from './user';
import interfaces from './interface';

const rootReducer = combineReducers({
  user,
  interfaces,
});
export default rootReducer;
