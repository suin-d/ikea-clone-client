import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import ButtonBig from '../../common/buttons/ButtonBig';
import InputSimple from '../../common/inputs/InputSimple';

export const Gap = styled.div`
  height: 20px;
`;
export const LoginRightSection = styled.section`
  flex: 2.6;
  background: #fff;
  padding-left: 70px;
  display: flex;
  align-items: center;
  form {
    width: 400px;
    em {
      font-size: 12px;
      color: #df0a51;
    }
    a {
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      text-decoration: underline;
      &:hover {
        font-weight: 600;
      }
    }
  }
`;

export default function LoginRight() {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  return (
    <LoginRightSection>
      <form>
        <InputSimple
          value={email}
          onChange={onChangeEmail}
          label="이메일 또는 휴대폰 번호"
          type="text"
          warn
        />
        <em>이메일 또는 휴대폰 번호를 확인</em>
        <Gap />
        <InputSimple
          value={password}
          onChange={onChangePassword}
          label="비밀번호"
          type="password"
        />
        <Link to="/signin/find">비밀번호 찾기</Link>
        <Gap />
        <ButtonBig type="submit">로그인</ButtonBig>
        <ButtonBig gray>회원가입</ButtonBig>
      </form>
    </LoginRightSection>
  );
}
