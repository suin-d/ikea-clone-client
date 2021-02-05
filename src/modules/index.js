import { combineReducers } from 'redux';
import user from './user';
import interfaces from './interface';
import product from './product';

const rootReducer = combineReducers({
  user,
  product,
  interfaces,
});
export default rootReducer;
