import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  line-height: 1.5;
  margin: 0;
  color: #111;
  font-weight: bold;
  height: 2.5rem;
  padding: 0 1.5rem;
  background: none;
  border: 1px solid #dfdfdf;
  border-radius: 64px;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: #dfdfdf;
  }
  ${props =>
    props.white &&
    css`
      background: #fff;
      border: 1px solid #fff;
    `}
  ${props =>
    props.gray &&
    css`
      background: #f5f5f5;
      border: 1px solid #f5f5f5;
      &:hover {
        background: #dfdfdf;
      }
    `}
    ${props =>
    props.black &&
    css`
      background: #000;
      color: #fff;
      &:hover {
        background: #333;
      }
    `}
`;
export default function ButtonRound({ children, type = 'button', ...rest }) {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
}
