import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';

import Habiter from './components/Habiter';

import reportWebVitals from './reportWebVitals';

const rootReactElement = (
  <BrowserRouter>
    <Habiter />
  </BrowserRouter>
);

const target = document.querySelector('#root');
render(rootReactElement, target);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();