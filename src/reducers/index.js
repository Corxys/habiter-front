import { combineReducers } from 'redux';

import habiterReducer from './habiter';
import interviewsReducer from './interviews';
import interviewReducer from './interview';
import paginationReducer from './pagination';
import referenceReducer from './reference';

export default combineReducers({
  habiter: habiterReducer,
  interviews: interviewsReducer,
  interview: interviewReducer,
  pagination: paginationReducer,
  reference: referenceReducer,
});