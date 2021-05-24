// import 
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import reducer from '../reducers';

import habiterMiddleware from '../middlewares';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      habiterMiddleware
    ),
  ),
);

export default store;