import React from 'react';
import { Route } from 'react-router-dom';
import './assets/css/reset.css';
import Layout from './components/common/layout/Layout';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Layout>
        {/* 메인페이지 */}
        <Route path="/" component={MainPage} exact />
        {/* 로그인 */}
        <Route path="/signin" component={LoginPage} />
        {/* 회원가입 */}
        <Route path="/signup" render={() => <div>회원가입페이지</div>} />
        {/* 디테일 페이지 */}
        <Route path="/detail" component={DetailPage} />
      </Layout>
    </>
  );
}

export default App;
