import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import App from './App';
import rootReducer from './modules';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
