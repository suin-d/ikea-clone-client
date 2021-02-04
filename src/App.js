import React from 'react';
import { Route } from 'react-router-dom';
import './assets/css/reset.css';
import Layout from './components/common/layout/Layout';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <Layout>
        {/* 메인페이지 */}
        <Route path="/" component={MainPage} exact />
        {/* 로그인 */}
        <Route path="/signin" component={LoginPage} />
        {/* 회원가입 */}
        <Route path="/signup" component={SignupPage} />
      </Layout>
    </>
  );
}

export default App;
