import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import App from './App';
import rootReducer from './modules';
import theme from './utils/pallete';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST;
axios.defaults.withCredentials = true;

const prod = process.env.NODE_ENV === 'production';

const store = createStore(
  rootReducer,
  prod ? applyMiddleware(Thunk) : composeWithDevTools(applyMiddleware(Thunk))
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
