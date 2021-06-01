import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/index.scss';

import Habiter from './components/Habiter';

import { store, persistor } from './store';
import './i18n';

import reportWebVitals from './reportWebVitals';


store.dispatch({
  type: 'INIT_DATAS',
});

const rootReactElement = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Habiter />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

const target = document.querySelector('#root');
render(rootReactElement, target);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();