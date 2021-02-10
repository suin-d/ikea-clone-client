import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import MyPage from './Mypage';
import PaymentPage from './PaymentPage';
import SignupPage from './SignupPage';

export default function UserRouter() {
  return (
    <>
      <Route path="/user/mypage" component={MyPage} exact />
      <Route path="/user/signin" component={LoginPage} />
      <Route path="/user/signup" component={SignupPage} />
      <Route path="/user/payment" component={PaymentPage} />
    </>
  );
}
