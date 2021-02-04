/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import { login } from '../../../modules/user/thunk';
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

export default function LoginRight({ history }) {
  const dispatch = useDispatch();
  const { logInData, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  useEffect(() => {
    if (logInData) {
      alert('어서오세요');
      return history.replace('/');
    }
    if (logInError) return alert(logInError);
    return null;
  }, [logInData, logInError, history]);
  return (
    <LoginRightSection>
      <form onSubmit={onSubmit}>
        <InputSimple
          value={email}
          onChange={onChangeEmail}
          label="이메일"
          type="text"
        />
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
        <Link to="/signup">
          <ButtonBig gray>회원가입</ButtonBig>
        </Link>
      </form>
    </LoginRightSection>
  );
}
