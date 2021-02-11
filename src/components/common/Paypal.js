import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default function Paypal({ priceTotal = 0 }) {
  //   const {
  //     loadCart: { data },
  //   } = useSelector((state) => state.user);
  //   const dispatch = useDispatch();
  const onSuccess = (payment) => {
    console.log('The payment was succeeded!', payment);
  };

  const onCancel = (data) => {
    console.log('The payment was cancelled!', data);
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
