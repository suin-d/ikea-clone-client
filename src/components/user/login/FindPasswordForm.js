import React from 'react';
import { Gap, LoginRightSection } from './LoginRight';
import ButtonBig from '../../common/buttons/ButtonBig';
import InputSimple from '../../common/inputs/InputSimple';
import useInput from '../../../hooks/useInput';

export default function FindPasswordForm() {
  const [email, onChangeEmail] = useInput('');
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
        <Gap />
        <ButtonBig type="submit">비밀번호 재설정</ButtonBig>
      </form>
    </LoginRightSection>
  );
}
