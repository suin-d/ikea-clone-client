import React from 'react';
import { Route } from 'react-router-dom';
import './assets/css/reset.css';
import HeaderMenu from './components/common/header/HeaderMenu';

function App() {
  return (
    <>
      <Route path="/" component={HeaderMenu} />
    </>
  );
}

export default App;
