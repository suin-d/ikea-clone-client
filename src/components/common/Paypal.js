import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useDispatch } from 'react-redux';
import { addAlert } from '../../modules/interface';
import { successPayment } from '../../modules/user/thunk';

export default function Paypal({ priceTotal = 0, userInfo, productInfo }) {
  //   const {
  //     loadCart: { data },
  //   } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onSuccess = (payment) => {
    console.log('The payment was succeeded!', payment);
    const data = productInfo.map((v) => ({
      id: v.Product.id,
      title: v.Product.title,
      slCost: v.Product.slCost,
      quantity: v.quantity,
    }));
    dispatch(successPayment({ payment, userInfo, productInfo: data }));
  };

  const onCancel = (data) => {
    console.log('The payment was cancelled!', data);
    dispatch(addAlert('결제가 취소되었습니다.'));
  };

  const onError = (err) => {
    console.log('Error!', err);
  };

  const env = 'sandbox';
  const currency = 'USD';
  const total = priceTotal;
  const client = {
    sandbox: process.env.REACT_APP_PAYPAL_APP_ID,
    production: 'YOUR-PRODUCTION-APP-ID',
  };

  return (
    <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={total}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
      style={{
        size: 'large',
        color: 'blue',
        shape: 'rect',
        label: 'checkout',
      }}
    />
  );
}
