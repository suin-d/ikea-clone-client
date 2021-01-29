import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import styled from 'styled-components';
import LOGO from '../../../assets/img/logo-clear.svg';

const LoginSummary = styled.div`
  padding: 30px 70px;
  min-width: 256px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: #fff;
  img {
    width: 88px;
  }
  article {
    h1 {
      font-size: 32px;
      color: #fbd912;
      font-weight: bold;
    }
    p {
      margin: 25px 0;
    }
    span {
    }
  }
  div span {
    display: block;
    font-size: 11px;
  }
`;
const LoginLeftSection = styled.section`
  flex: 1.6;
  background: #0058a3;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  a {
    position: absolute;
    top: 35px;
    left: 25px;
    color: #fff;
    font-size: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export default function LoginLeft() {
  return (
    <LoginLeftSection>
      <Link to="/">
        <RiArrowLeftLine />
      </Link>
      <LoginSummary>
        <img src={LOGO} alt="로고" />
        <article>
          <h1>로그인</h1>
          <p>
            외워야 할 비밀번호가 많아 불편하셨죠?
            <br />
            이제 일회용 코드를 이용하여 간편하게 로그인하세요.
          </p>
          <span>* 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능</span>
        </article>
        <div>
          <span>Cozi - 개인정보처리방침</span>
          <span>© Inter IKEA Systems B.V. 1999-2021</span>
        </div>
      </LoginSummary>
    </LoginLeftSection>
  );
}
