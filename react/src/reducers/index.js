import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './user';
import game from './game';

let rootReducer = combineReducers({
  routing,
  user,
  game
});

export default rootReducer;
