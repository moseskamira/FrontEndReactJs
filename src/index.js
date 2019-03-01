import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store/combineStore';

import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();