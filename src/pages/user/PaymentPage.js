import React, { useState } from 'react';
import styled from 'styled-components';
import PayAddress from '../../components/user/payment/PayAddress';
import PayInfo from '../../components/user/payment/PayInfo';
import PayInsertForm from '../../components/user/payment/PayInsertForm';
import PayMethod from '../../components/user/payment/PayMethod';
import useCheckLogin from '../../hooks/useCheckLogin';

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-right: 60px;
`;

const mockData = [
  {
    id: '20443129',
    title: 'TRÅDFRI 트로드프리',
    slCost: 16900,
    summary: '리모컨',
    size: '',
    WishList: {
      createdAt: '2021-02-09T12:46:31.000Z',
      updatedAt: '2021-02-09T12:46:31.000Z',
      UserId: 8,
      ProductId: '20443129',
    },
    ProdImages: [
      {
        id: 378,
        src:
          'https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=s',
        info: 'TRÅDFRI 트로드프리 리모컨',
        srcSet:
          '\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=g 1600w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=sg 1400w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=xxxl 1100w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=xxl 900w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=xl 750w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=l 700w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=m 600w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=s 500w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=xs 400w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=xxs 300w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=xxxs 160w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=u 80w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=xu 40w,\n  https://www.ikea.com/kr/ko/images/products/tradfri-remote-control__0609380_PE684491_S5.JPG?f=xxu 39w\n',
        sizes:
          '(max-width: 900px) 100vw, (max-width: 1200px) 160px, (max-width: 1400px) 300px, (max-width: 1700px) 400px, 500px',
        ProductId: '20443129',
      },
    ],
  },
];
export default function PaymentPage() {
  const userInfo = useCheckLogin();
  const [address, setAddress] = useState(userInfo.address);
  return (
    <ContentContainer>
      <PayInfo data={mockData} />
      <PayAddress address={address} setAddress={setAddress} />
      <PayInsertForm address={address} userInfo={userInfo} />
      <PayMethod />
    </ContentContainer>
  );
}
