/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import useInput from '../../../hooks/useInput';
import ButtonBig from '../../common/buttons/ButtonBig';
import CheckboxSimple from '../../common/inputs/CheckboxSimple';
import InputSimple from '../../common/inputs/InputSimple';
import SelectSimple from '../../common/inputs/SelectSimple';
import AddressSearch from './AddressSearch';
import AuthEmail from './AuthEmail';
import { signUp } from '../../../modules/user/thunk';

export const Gap = styled.div`
  ${(props) =>
    props.h &&
    css`
      height: ${props.h};
    `}
`;
export const WarnText = styled.span`
  color: #df0a51;
  font-size: 14px;
`;
const options = [
  { id: 0, value: '남성' },
  { id: 1, value: '여성' },
  { id: 2, value: '선택하지 않음' },
];
const initialValid = {
  emailError: false,
  phoneError: false,
  passwordError: false,
};
function SignupForm() {
  const dispatch = useDispatch();
  const { signUpError, signUpData } = useSelector((state) => state.user);
  const [authOpen, setAuthOpen] = useState(false);
  const [lastName, onChangeLastName] = useInput('');
  const [firstName, onChangeFirstName] = useInput('');
  const [birth, onChangeBirth] = useInput('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [detailAdd, onChangeDetailAdd] = useInput('');
  const [gender, onChangeGender] = useInput(2);
  const [email, setEmail] = useState('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [validation, setValidation] = useState(initialValid);
  const [term, setTerm] = useState(false);

  const { emailError, phoneError, passwordError } = validation;
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    setValidation({
      ...validation,
      emailError: !emailRegExp.test(e.target.value)
        ? '올바른 이메일 형식을 입력해주세요'
        : false,
    });
  };
  const onChangePhone = (e) => {
    const phoneRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
    setPhone(e.target.value);
    setValidation({
      ...validation,
      phoneError: !phoneRegExp.test(e.target.value)
        ? '올바른 휴대폰번호 형식을 입력해주세요'
        : false,
    });
  };
  const onChangePasswordCheck = (e) => {
    const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    setPasswordCheck(e.target.value);
    setValidation({
      ...validation,
      passwordError: !regex.test(e.target.value)
        ? password !== e.target.value
          ? '비밀번호가 일치하지 않습니다.'
          : '특수문자 / 문자 / 숫자 포함 형태의 8~15자리'
        : false,
    });
  };

  const onSubmit = () => {
    if (emailError) return alert(emailError);
    if (phoneError) return alert(phoneError);
    if (passwordError) return alert(passwordError);
    if (!term) return alert('이용약관을 체크해주세요');
    const data = {
      name: lastName + firstName,
      birth,
      phone,
      address: address + detailAdd,
      gender,
      email,
      password,
    };
    dispatch(signUp(data));
  };

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
  useEffect(() => {
    if (signUpData) {
      setAuthOpen(true);
    }
  }, [signUpData]);
  return (
    <>
      <div>
        <InputSimple
          label="성"
          width="600px"
          value={lastName}
          onChange={onChangeLastName}
        />
        <Gap h="30px" />
        <InputSimple
          label="이름"
          width="600px"
          value={firstName}
          onChange={onChangeFirstName}
        />
        <Gap h="30px" />
        <InputSimple
          label="생일"
          width="600px"
          placeholder="2021-02-03"
          value={birth}
          onChange={onChangeBirth}
        />
        <Gap h="30px" />
        <InputSimple
          label="휴대폰"
          width="600px"
          placeholder="010-****-****"
          value={phone}
          warn={phoneError}
          onChange={onChangePhone}
        />
        {phoneError && <WarnText>{phoneError}</WarnText>}
        <Gap h="30px" />
        <SelectSimple
          options={options}
          width="350px"
          title="성별"
          value={gender}
          onChange={onChangeGender}
        />
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
          value={detailAdd}
          onChange={onChangeDetailAdd}
        />
        <Gap h="30px" />
        <InputSimple
          label="이메일"
          width="500px"
          value={email}
          warn={emailError}
          onChange={onChangeEmail}
        />
        {emailError && <WarnText>{emailError}</WarnText>}
        <Gap h="30px" />
        <InputSimple
          placeholder="특수문자 / 문자 / 숫자 포함 형태의 8~15자리"
          label="비밀번호"
          warn={passwordError}
          value={password}
          onChange={onChangePassword}
          type="password"
          width="400px"
        />
        <Gap h="10px" />
        <InputSimple
          label="비밀번호확인"
          warn={passwordError}
          type="password"
          width="400px"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
        {passwordError && <WarnText>{passwordError}</WarnText>}
        <Gap h="30px" />
        <CheckboxSimple
          title="이용약관에 동의해요!"
          value={term}
          onChange={() => setTerm(!term)}
        />
        <Gap h="40px" />
        <ButtonBig type="submit" width="500px" black onClick={onSubmit}>
          회원가입
        </ButtonBig>
      </div>
      {authOpen && <AuthEmail email={email} close={() => setAuthOpen(false)} />}
    </>
  );
}
export default SignupForm;
