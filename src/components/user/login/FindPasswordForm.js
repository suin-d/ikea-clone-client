import React from 'react';
import { useDispatch } from 'react-redux';
import { Gap, LoginRightSection } from './LoginRight';
import ButtonBig from '../../common/buttons/ButtonBig';
import InputSimple from '../../common/inputs/InputSimple';
import useInput from '../../../hooks/useInput';
import { passwordChange } from '../../../modules/user/thunk';

export default function FindPasswordForm() {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const onSubmit = e => {
    e.preventDefault();
    dispatch(passwordChange(email));
  };
  return (
    <LoginRightSection>
      <form onSubmit={onSubmit}>
        <InputSimple
          value={email}
          onChange={onChangeEmail}
          label="이메일 또는 휴대폰 번호"
          type="text"
        />
        <Gap />
        <ButtonBig type="submit">비밀번호 재설정</ButtonBig>
      </form>
    </LoginRightSection>
  );
}
