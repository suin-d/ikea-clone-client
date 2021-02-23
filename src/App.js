import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import './assets/css/reset.css';
import Error from './components/common/Error';
import Layout from './components/common/layout/Layout';
import Loading from './components/common/Loading';
import Alert from './components/common/message/Alert';

const MainPage = lazy(() => import('./pages/MainPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));
const ListPage = lazy(() => import('./pages/ListPage'));
const UserRouter = lazy(() => import('./pages/user'));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={Loading}>
          {/* 메인페이지 */}
          <Route path="/" component={MainPage} exact />
          {/* 유저 */}
          <Route path="/user" component={UserRouter} />
          {/* 리스트 페이지 */}
          <Route path="/list/:id" component={ListPage} />
          {/* 디테일 페이지 */}
          <Route path="/detail/:id" component={DetailPage} />
          {/* 디테일 페이지 */}
          <Route path="/eeeee">
            <Error text="상품이 없습니다" />
          </Route>
        </Suspense>
      </Layout>
      <Alert />
    </>
  );
}

export default App;
