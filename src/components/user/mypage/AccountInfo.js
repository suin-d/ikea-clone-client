import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import { addAlert } from '../../../modules/interface';
import { updateUser } from '../../../modules/user/thunk';
import ButtonBig from '../../common/buttons/ButtonBig';
import InputSimple from '../../common/inputs/InputSimple';
import SelectSimple from '../../common/inputs/SelectSimple';
import { WarnText, Gap } from '../signup/SignupForm';

function PasswordInfo({ email }) {
  const history = useHistory();
  const changePw = () => {
    history.push(`/user/signin/change/${email}`);
  };
  return (
    <li>
      <h5>
        <span>비밀번호</span>
        <b onClick={changePw}>수정</b>
      </h5>
      <article>
        <span>********</span>
        <span>{email}</span>
      </article>
    </li>
  );
}
function PhoneInfo({ email, phone }) {
  const [editMode, setEditMode] = useState(false);
  const [phoneValue, setPhone] = useState(phone);
  const [phoneError, setPhoneError] = useState(false);
  const dispatch = useDispatch();
  const onChangePhone = e => {
    const phoneRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
    setPhone(e.target.value);
    setPhoneError(
      !phoneRegExp.test(e.target.value)
        ? '올바른 휴대폰번호 형식을 입력해주세요'
        : false
    );
  };
  const onSubmit = e => {
    e.preventDefault();
    if (phoneError) return dispatch(addAlert('정확한 정보를 입력해주세요.'));
    dispatch(updateUser({ phone: phoneValue }));
    return setEditMode(false);
  };
  return (
    <li>
      <h5>
        <span>연락처</span>
        <b onClick={() => setEditMode(!editMode)}>
          {editMode ? '닫기' : '수정'}
        </b>
      </h5>
      {editMode ? (
        <form>
          <InputSimple
            label="휴대폰번호"
            width="600px"
            value={phoneValue}
            onChange={onChangePhone}
          />
          {phoneError && <WarnText>{phoneError}</WarnText>}
          <Gap h="30px" />
          <ButtonBig type="submit" width="500px" black onClick={onSubmit}>
            수정
          </ButtonBig>
        </form>
      ) : (
        <article>
          <span>{phone}</span>
          <span>{email}</span>
        </article>
      )}
    </li>
  );
}
function PersonalInfo({ gender, name, birth }) {
  const [editMode, setEditMode] = useState(false);
  const [genderValue, onChangeGender] = useInput(gender);
  const [nameValue, onChangeName] = useInput(name);
  const [birthValue, onChangeBirth] = useInput(birth);
  const dispatch = useDispatch();
  const computedGender = () => {
    switch (gender) {
      case 0:
        return '남성';
      case 1:
        return '여성';
      case 2:
        return '선택하지 않음';
      default:
        return null;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      updateUser({
        name: nameValue,
        birth: birthValue,
        gender: parseInt(genderValue, 10),
      })
    );
    setEditMode(false);
  };
  return (
    <li>
      <h5>
        <span>개인정보</span>
        <b onClick={() => setEditMode(!editMode)}>
          {editMode ? '닫기' : '수정'}
        </b>
      </h5>
      {editMode ? (
        <form>
          <InputSimple
            label="이름"
            width="600px"
            value={nameValue}
            onChange={onChangeName}
          />
          <Gap h="20px" />
          <InputSimple
            label="생일"
            width="600px"
            placeholder="2021-02-03"
            value={birthValue}
            onChange={onChangeBirth}
          />
          <Gap h="20px" />
          <SelectSimple
            options={[
              { id: 0, value: '남성' },
              { id: 1, value: '여성' },
              { id: 2, value: '선택하지 않음' },
            ]}
            width="350px"
            title="성별"
            value={genderValue}
            onChange={onChangeGender}
          />
          <Gap h="30px" />
          <ButtonBig type="submit" width="500px" black onClick={onSubmit}>
            수정
          </ButtonBig>
        </form>
      ) : (
        <article>
          <span>{name}</span>
          <span>{birth}</span>
          <span>{computedGender()}</span>
        </article>
      )}
    </li>
  );
}
export default function AccountInfo({ userInfo }) {
  return (
    <>
      <PersonalInfo
        email={userInfo.email}
        gender={userInfo.gender}
        name={userInfo.name}
        birth={userInfo.birth}
      />
      <PhoneInfo email={userInfo.email} phone={userInfo.phone} />
      <PasswordInfo email={userInfo.email} />
    </>
  );
}
