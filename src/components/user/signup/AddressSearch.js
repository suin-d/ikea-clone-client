import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import ButtonBig from '../../common/buttons/ButtonBig';
import ModalLayout from '../../common/modal/ModalLayout';

export default function AddressSearch({ setAddress }) {
  const [active, setActive] = useState(false);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
    setActive(false);
  };
  return (
    <>
      <ButtonBig onClick={() => setActive(true)} width="300px">
        주소검색
      </ButtonBig>
      {active && (
        <ModalLayout close={() => setActive(false)} title="주소검색">
          <DaumPostcode
            onComplete={handleComplete}
            width={500}
            autoClose
            height={450}
            animation
          />
        </ModalLayout>
      )}
    </>
  );
}
