import React from 'react';
import styled, { css } from 'styled-components';

const DotButtonBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 50;
  i {
    width: 35px;
    height: 35px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
  }
  i::after {
    content: '';
    display: inline-block;
    box-shadow: 0 0 2px black;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 11;
  }
  ${(props) =>
    props.active &&
    css`
      display: none;
    `}
`;

export default function ButtonDot({ position, active, onEnter }) {
  return (
    <DotButtonBox style={position} active={active} onMouseEnter={onEnter}>
      <i />
    </DotButtonBox>
  );
}
