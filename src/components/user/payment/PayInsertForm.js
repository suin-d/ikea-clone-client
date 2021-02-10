import React from 'react';
import ButtonBig from '../../common/buttons/ButtonBig';
import InputSimple from '../../common/inputs/InputSimple';
import { Gap } from '../signup/SignupForm';
import { ContentSection } from './PayInfo';

export default function PayInsertForm({ address, userInfo }) {
  return (
    <ContentSection>
      <h1>주문 정보를 입력해주세요</h1>
      <Gap h="35px" />
      <InputSimple label="이름" value={userInfo.name} />
      <Gap h="25px" />
      <InputSimple label="이메일" value={userInfo.email} />
      <Gap h="25px" />
      <InputSimple
        label="전화번호"
        placeholder="010-****-****"
        value={userInfo.phone}
      />
      <Gap h="25px" />
      <InputSimple label="주소" value={address} placeholder="010-****-****" />
      <Gap h="25px" />
      <InputSimple label="상세주소" placeholder="동 호수까지 입력해주세요" />
      <Gap h="35px" />
      <ButtonBig>계속</ButtonBig>
    </ContentSection>
  );
}
