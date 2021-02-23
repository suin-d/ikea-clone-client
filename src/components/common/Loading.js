import React from 'react';
import styled from 'styled-components';
import LoadingImg from '../../assets/img/loading.gif';

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-top: 100px;
    width: 200px;
  }
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <img src={LoadingImg} alt="loading..." />
    </LoadingContainer>
  );
}
