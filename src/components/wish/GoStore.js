import React from 'react';
import styled from 'styled-components';

const StoreContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #484848;
  }
`;
export default function GoStore() {
  return (
    <StoreContainer>
      <p>준비중인 서비스 입니다.</p>
    </StoreContainer>
  );
}
