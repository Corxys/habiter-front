import { combineReducers } from 'redux';

import habiterReducer from './habiter';

export default combineReducers({
  habiter: habiterReducer,
});