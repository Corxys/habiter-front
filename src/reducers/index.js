import { combineReducers } from 'redux';

import interviewReducer from './interview';

export default combineReducers({
  interview: interviewReducer,
});