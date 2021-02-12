import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PayAddress from '../../components/user/payment/PayAddress';
import PayInfo from '../../components/user/payment/PayInfo';
import PayInsertForm from '../../components/user/payment/PayInsertForm';
import PayMethod from '../../components/user/payment/PayMethod';
import useCheckLogin from '../../hooks/useCheckLogin';
import useInput from '../../hooks/useInput';

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-right: 60px;
`;

const getTotal = (data) =>
  data.reduce(
    (acc, v) => parseInt(v.quantity, 10) * parseInt(v.Product.slCost, 10) + acc,
    0
  );
export default function PaymentPage({ history }) {
  const userInfo = useCheckLogin();
  const { loadCartData: data, successPaymentData: paySuccess } = useSelector(
    (state) => state.user
  );
  const [name, onChangeName] = useInput(userInfo.name);
  const [email, onChangeEmail] = useInput(userInfo.email);
  const [phone, onChangePhone] = useInput(userInfo.phone);
  const [address, setAddress] = useState(`${userInfo.address.split(')')[0]})`);
  const [detailAddress, onChangeDetailAddress] = useInput(
    userInfo.address.split(')')[1]
  );
  const totalPrice = useMemo(() => data && getTotal(data), [data]);
  const userPayInfo = {
    name,
    email,
    phone,
    address: `${address} ${detailAddress}`,
    totalPrice,
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    if (paySuccess) {
      history.replace('/user/history');
    }
  }, [paySuccess, history]);
  if (!data) return null;
  return (
    <ContentContainer>
      <PayInfo data={data} total={totalPrice} />
      <PayAddress address={address} setAddress={setAddress} />
      <PayInsertForm
        address={address}
        detailAdd={detailAddress}
        onChangeDetailAdd={onChangeDetailAddress}
        name={name}
        email={email}
        onChangeEmail={onChangeEmail}
        phone={phone}
        onChangePhone={onChangePhone}
        onChangeName={onChangeName}
        userInfo={userInfo}
      />
      <PayMethod total={totalPrice} userInfo={userPayInfo} productInfo={data} />
    </ContentContainer>
  );
}
