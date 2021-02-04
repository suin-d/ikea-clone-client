import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import useInput from '../../../hooks/useInput';
import ButtonBig from '../../common/buttons/ButtonBig';
import CheckboxSimple from '../../common/inputs/CheckboxSimple';
import InputSimple from '../../common/inputs/InputSimple';
import SelectSimple from '../../common/inputs/SelectSimple';
import AddressSearch from './AddressSearch';
import AuthEmail from './AuthEmail';

const Gap = styled.div`
  ${(props) =>
    props.h &&
    css`
      height: ${props.h};
    `}
`;
const options = [
  { id: 0, value: '남성' },
  { id: 1, value: '여성' },
  { id: 2, value: '선택하지 않음' },
];
export default function SignupForm() {
  const [authOpen, setAuthOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  return (
    <>
      <div>
        <InputSimple label="성" width="600px" />
        <Gap h="30px" />
        <InputSimple label="이름" width="600px" />
        <Gap h="30px" />
        <InputSimple label="생일" width="600px" placeholder="2021-02-03" />
        <Gap h="30px" />
        <InputSimple label="휴대폰" width="600px" placeholder="010-****-****" />
        <Gap h="30px" />
        <SelectSimple options={options} width="350px" title="성별" />
        <Gap h="50px" />
        <AddressSearch setAddress={setAddress} />
        <Gap h="20px" />
        <InputSimple
          value={address}
          label="우편번호"
          placeholder="위 버튼을 눌러주세요"
          width="500px"
        />
        <Gap h="20px" />
        <InputSimple
          label="상세주소"
          width="500px"
          placeholder="동,호수까지 정확히 입력해주세요"
        />
        <Gap h="30px" />
        <InputSimple
          label="이메일"
          width="500px"
          value={email}
          onChange={onChangeEmail}
        />
        <Gap h="30px" />
        <InputSimple
          label="비밀번호"
          value={password}
          onChange={onChangePassword}
          type="password"
          width="400px"
        />
        <Gap h="10px" />
        <InputSimple label="비밀번호확인" type="password" width="400px" />
        <Gap h="30px" />
        <CheckboxSimple title="이용약관에 동의해요!" />
        <Gap h="40px" />
        <ButtonBig
          type="submit"
          width="500px"
          black
          onClick={() => setAuthOpen(true)}
        >
          회원가입
        </ButtonBig>
      </div>
      {authOpen && <AuthEmail email={email} close={() => setAuthOpen(false)} />}
    </>
  );
}
