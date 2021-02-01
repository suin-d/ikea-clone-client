import React from 'react';
import styled from 'styled-components';
import { CircleButton } from './ButtonCart';

const NextButton = styled(CircleButton)`
  line-height: 1.5;
  margin: 0;
  color: #fff;
  background: #fff;
  font-weight: bold;
  height: 3.5rem;
  width: 3.5rem;
  border: 1px solid #dfdfdf;
  border-radius: 64px;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: #f5f5f5;
  }
  svg {
    width: 25px;
    fill: #2c2b2b;
  }
`;

export default function ButtonNext() {
  return (
    <NextButton>
      <svg
        focusable="false"
        className="pub__svg-icon pub__btn__icon"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"
        />
      </svg>
    </NextButton>
  );
}
