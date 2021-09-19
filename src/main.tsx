import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './components/GlobalStyles';
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
