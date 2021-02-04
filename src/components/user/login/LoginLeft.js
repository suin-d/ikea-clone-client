import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import styled from 'styled-components';
import LOGO from '../../../assets/img/logo-clear.svg';

const LoginSummary = styled.div`
  padding: 30px 70px 30px 0;
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
    width: 256px;
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
  i {
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
function LoginArticle() {
  return (
    <article>
      <h1>로그인</h1>
      <p>
        외워야 할 비밀번호가 많아 불편하셨죠?
        <br />
        이제 일회용 코드를 이용하여 간편하게 로그인하세요.
      </p>
      <span>* 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능</span>
    </article>
  );
}
function ChangePasswordArticle() {
  return (
    <article>
      <h1>비밀번호 변경</h1>
      <p>변경하실 비밀번호를 입력해주세요.</p>
    </article>
  );
}
function FindPasswordArticle() {
  return (
    <article>
      <h1>비밀번호 찾기</h1>
      <p>이메일을 통해 비밀번호를 재설정해 주세요.</p>
    </article>
  );
}
function LoginLeft({ history }) {
  const goBack = () => {
    history.goBack();
  };
  return (
    <LoginLeftSection>
      <i onClick={goBack}>
        <RiArrowLeftLine />
      </i>
      <LoginSummary>
        <img src={LOGO} alt="로고" />
        <Route path="/signin" exact component={LoginArticle} />
        <Route path="/signin/find" component={FindPasswordArticle} />
        <Route path="/signin/change/:email" component={ChangePasswordArticle} />
        <div>
          <span>Cozi - 개인정보처리방침</span>
          <span>© Inter IKEA Systems B.V. 1999-2021</span>
        </div>
      </LoginSummary>
    </LoginLeftSection>
  );
}
export default withRouter(LoginLeft);
