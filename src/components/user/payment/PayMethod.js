import React from 'react';
import Paypal from '../../common/Paypal';
import { Gap } from '../signup/SignupForm';
import { ContentSection } from './PayInfo';

export default function PayMethod() {
  return (
    <ContentSection>
      <h1>결제 방식 선택</h1>
      <Gap h="30px" />
      <Paypal priceTotal={100000} />
      <Gap h="30px" />
    </ContentSection>
  );
}
