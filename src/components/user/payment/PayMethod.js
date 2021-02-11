import React from 'react';
import Paypal from '../../common/Paypal';
import { Gap } from '../signup/SignupForm';
import { ContentSection } from './PayInfo';

export default function PayMethod({ total, userInfo, productInfo }) {
  return (
    <ContentSection>
      <h1>결제 방식 선택</h1>
      <Gap h="30px" />
      <Paypal
        priceTotal={total}
        userInfo={userInfo}
        productInfo={productInfo}
      />
      <Gap h="30px" />
    </ContentSection>
  );
}
