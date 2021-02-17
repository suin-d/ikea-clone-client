import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BANNER from '../../../assets/img/signupBanner.png';

const LeftSection = styled.div`
  flex: 1;
  padding-left: 30px;
  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    b {
      color: #0058a3;
    }
  }
  p {
    font-size: 14px;
    margin-bottom: 50px;
    a {
      text-decoration: underline;
      font-weight: bold;
    }
  }
  img {
    width: 70%;
  }
  @media ${({ theme }) => theme.mobile} {
    img {
      display: none;
    }
    h1 {
      font-size: 30px;
    }
  }
`;
export default function SignupBanner() {
  return (
    <LeftSection>
      <h1>
        <b>IKEA Family</b>
        <span>회원가입</span>
      </h1>
      <p>
        <span>이미 가입하셨나요?</span>
        &nbsp;
        <Link to="/user/signin">로그인 하기</Link>
      </p>
      <img src={BANNER} alt="banner" />
    </LeftSection>
  );
}
