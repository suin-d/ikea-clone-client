import React from 'react';
import { Route } from 'react-router-dom';
import './assets/css/reset.css';
import Layout from './components/common/layout/Layout';
import Alert from './components/common/message/Alert';
import MainPage from './pages/MainPage';
import UserRouter from './pages/user';

function App() {
  return (
    <>
      <Layout>
        {/* 메인페이지 */}
        <Route path="/" component={MainPage} exact />
        {/* 유저 */}
        <Route path="/user" component={UserRouter} />
      </Layout>
      <Alert />
    </>
  );
}

export default App;
