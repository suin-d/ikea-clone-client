import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import ButtonBig from '../../common/buttons/ButtonBig';
import ModalLayout from '../../common/modal/ModalLayout';

export default function AddressSearch({ setAddress, setEdit = false }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 770);
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
    if (setEdit) {
      setEdit(false);
    }
  };
  useEffect(() => {
    const onWidth = window.addEventListener('resize', () => {
      if (window.innerWidth < 770) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
    return () => {
      window.removeEventListener('resize', onWidth);
    };
  }, []);
  console.log(isMobile);
  return (
    <>
      <ButtonBig onClick={() => setActive(true)} width="300px">
        주소검색
      </ButtonBig>
      {active && (
        <ModalLayout close={() => setActive(false)} title="주소검색">
          <DaumPostcode
            onComplete={handleComplete}
            width={isMobile ? 260 : 500}
            autoClose
            height={isMobile ? 550 : 450}
            animation
          />
        </ModalLayout>
      )}
    </>
  );
}
