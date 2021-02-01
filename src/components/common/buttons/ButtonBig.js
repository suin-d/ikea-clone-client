import React from 'react';
import styled, { css } from 'styled-components';

const StyledBtn = styled.button`
  width: 100%;
  line-height: 1.5;
  margin: 0;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  height: 2.7rem;
  padding: 0 1.5rem;
  background: #0058a3;
  border: none;
  border-radius: 64px;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: #004079;
  }
  ${(props) =>
    props.gray &&
    css`
      background: #f5f5f5;
      color: #111;
      &:hover {
        background: #dfdfdf;
      }
    `}
  &+& {
    margin-top: 15px;
  }
`;
export default function ButtonBig({ children, type = 'button', ...rest }) {
  return (
    <StyledBtn type={type} {...rest}>
      {children}
    </StyledBtn>
  );
}