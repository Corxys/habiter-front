// import 
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// reducer
import rootReducer from '../reducers';

// middlewares
import habiterMiddleware from '../middlewares';

const persistConfig = {
  key: 'root',
  storage: storage,
  backlist: ['interviews'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = composeWithDevTools(
  applyMiddleware(
    thunk,
    habiterMiddleware
  ),
);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export { store, persistor };