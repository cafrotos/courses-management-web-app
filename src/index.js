import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ErrorHandle } from './components';
import './assets/fonts/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css';

ReactDOM.render(
  <ErrorHandle>
    <App />
  </ErrorHandle>
  , document.getElementById('root')
);

