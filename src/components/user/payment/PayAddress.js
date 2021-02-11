import React, { useState } from 'react';
import styled from 'styled-components';
import AddressSearch from '../signup/AddressSearch';
import { ContentSection } from './PayInfo';

const PayAddressContainer = styled(ContentSection)`
  p {
    margin: 20px 0 20px 0;
    text-align: center;
    small {
      font-size: 12px;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  button {
    width: 100%;
  }
`;

export default function PayAddress({ address, setAddress }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <PayAddressContainer>
        <h1>제품수령지</h1>
        {editMode ? (
          <>
            <p>정확한 주소를 입력해주세요</p>
            <AddressSearch setAddress={setAddress} setEdit={setEditMode} />
          </>
        ) : (
          <>
            <p>
              <small onClick={() => setEditMode(true)}>수정하기</small>
            </p>
            <p>{address}</p>
          </>
        )}
      </PayAddressContainer>
    </>
  );
}
