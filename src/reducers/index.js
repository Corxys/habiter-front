import { combineReducers } from 'redux';

import habiterReducer from './habiter';
import interviewsReducer from './interviews';

export default combineReducers({
  habiter: habiterReducer,
  interviews: interviewsReducer,
});