import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import FindPasswordForm from '../components/user/login/FindPasswordForm';
import LoginLeft from '../components/user/login/LoginLeft';
import LoginRight from '../components/user/login/LoginRight';

const LoginPageLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 999;
`;

export default function LoginPage() {
  return (
    <LoginPageLayout>
      <LoginLeft />
      <Route path="/signin" component={LoginRight} exact />
      <Route path="/signin/find" component={FindPasswordForm} exact />
    </LoginPageLayout>
  );
}
