import React from 'react';
import styled, { css } from 'styled-components';
import LoadingImg from 'assets/img/loading.gif';

export const LoadingContainer = styled.div`
  margin-right: 60px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    margin-top: 100px;
    width: 200px;
  }
  p {
    margin-top: 20px;
    font-size: 18px;
    letter-spacing: 1.2;
  }
  ${props =>
    props.grid &&
    css`
      grid-column: 2/4;
    `}
  @media ${({ theme }) => theme.mobile} {
    margin-right: 0px;
  }
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <img src={LoadingImg} alt="loading..." />
    </LoadingContainer>
  );
}
