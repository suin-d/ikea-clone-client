import React from 'react';
import InputSimple from '../../common/inputs/InputSimple';
import { Gap } from '../signup/SignupForm';
import { ContentSection } from './PayInfo';

export default function PayInsertForm({
  address,
  onChangeDetailAdd,
  detailAdd,
  phone,
  onChangePhone,
  name,
  onChangeName,
  email,
  onChangeEmail,
}) {
  return (
    <ContentSection>
      <h1>주문 정보를 입력해주세요</h1>
      <Gap h="35px" />
      <InputSimple label="이름" value={name} onChange={onChangeName} />
      <Gap h="25px" />
      <InputSimple label="이메일" value={email} onChange={onChangeEmail} />
      <Gap h="25px" />
      <InputSimple
        label="전화번호"
        placeholder="010-****-****"
        value={phone}
        onChange={onChangePhone}
      />
      <Gap h="25px" />
      <InputSimple label="주소" value={address} placeholder="010-****-****" />
      <Gap h="25px" />
      <InputSimple
        label="상세주소"
        value={detailAdd}
        onChange={onChangeDetailAdd}
        placeholder="동 호수까지 입력해주세요"
      />
      <Gap h="35px" />
    </ContentSection>
  );
}
