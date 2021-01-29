import React from 'react';
import styled from 'styled-components';
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
  // const [findPwMode, setFindPwMode] = useState(false);
  return (
    <LoginPageLayout>
      <LoginLeft />
      <LoginRight />
    </LoginPageLayout>
  );
}
