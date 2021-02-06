import React, { useState } from 'react';
import useInput from '../../../hooks/useInput';
import ButtonBig from '../../common/buttons/ButtonBig';
import InputSimple from '../../common/inputs/InputSimple';
import AddressSearch from '../signup/AddressSearch';
import { Gap } from '../signup/SignupForm';

export default function AddressInfo({ userInfo }) {
  const [editMode, setEditMode] = useState(false);
  const [addressValue, setAddress] = useState('');
  const [detailAddValue, onChangeDetailAdd] = useInput('');
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <li>
      <h5>
        <span>주소정보</span>
        <b onClick={() => setEditMode(!editMode)}>
          {editMode ? '닫기' : '수정'}
        </b>
      </h5>
      {editMode ? (
        <form>
          <AddressSearch setAddress={setAddress} />
          <Gap h="20px" />
          <InputSimple
            value={addressValue}
            label="우편번호"
            placeholder="위 버튼을 눌러주세요"
            width="500px"
          />
          <Gap h="20px" />
          <InputSimple
            label="상세주소"
            width="500px"
            placeholder="동,호수까지 정확히 입력해주세요"
            value={detailAddValue}
            onChange={onChangeDetailAdd}
          />
          <Gap h="30px" />
          <ButtonBig type="submit" width="500px" black onClick={onSubmit}>
            수정
          </ButtonBig>
        </form>
      ) : (
        <article>
          <span>{userInfo.address}</span>
        </article>
      )}
    </li>
  );
}
