import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginRightSection } from './LoginRight';
import ButtonBig from '../../common/buttons/ButtonBig';
import InputSimple from '../../common/inputs/InputSimple';
import { WarnText, Gap } from '../signup/SignupForm';
import { passwordSubmit } from '../../../modules/user/thunk';

export default function ChangePasswordForm({ match, history }) {
  const dispatch = useDispatch();
  const { passwordSubmitData } = useSelector(state => state.user);
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  const onChangePassword = e => {
    const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    setPassword(e.target.value);
    if (!regex.test(e.target.value)) {
      setPasswordError('특수문자 / 문자 / 숫자 포함 형태의 8~15자리');
    } else {
      setPasswordError(false);
    }
  };
  const onChangePasswordCheck = e => {
    setPasswordCheck(e.target.value);
    if (password !== e.target.value) {
      setPasswordCheckError('비밀번호와 동일하게 입력해주세요');
    } else {
      setPasswordCheckError(false);
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(passwordSubmit({ email: match.params.email, password }));
  };

  useEffect(() => {
    if (passwordSubmitData) {
      history.replace('/signin');
    }
  }, [passwordSubmitData, history]);
  return (
    <LoginRightSection>
      <form onSubmit={onSubmit}>
        <InputSimple
          value={password}
          onChange={onChangePassword}
          label="비밀번호"
          warn={passwordError}
          type="password"
        />
        {passwordError && <WarnText>{passwordError}</WarnText>}
        <Gap h="20px" />
        <InputSimple
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          label="비밀번호 확인"
          warn={passwordCheckError}
          type="password"
        />
        {passwordCheckError && <WarnText>{passwordCheckError}</WarnText>}
        <Gap h="30px" />
        <ButtonBig type="submit">비밀번호 변경</ButtonBig>
      </form>
    </LoginRightSection>
  );
}
