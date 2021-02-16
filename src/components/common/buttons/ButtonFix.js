import React from 'react';
import styled from 'styled-components';
import { CircleButton } from './ButtonCart';

const FixButton = styled(CircleButton)`
  min-width: 2.7rem;
  display: flex;
  background: #000;
  border-radius: 64px;
  overflow: hidden;
  position: fixed;
  bottom: 60px;
  left: 50px;
  &:hover {
    width: 130px;
    background: #222;
    span {
      opacity: 1;
      width: 100px;
    }
  }
  span {
    word-wrap: normal;
    overflow: hidden;
    color: #fff;
    width: 0px;
    font-weight: bold;
    font-size: 14px;
    opacity: 0;
    padding-left: 25px;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 22px;
    transform: translate(-50%, -50%);
  }
  @media ${({ theme }) => theme.mobile} {
    bottom: 60px;
    right: 40px;
    left: auto;
  }
`;
export default function ButtonFix() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <FixButton onClick={scrollTop}>
      <svg
        focusable="false"
        className="svg-icon  hnf-svg-icon"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.94l8 8-1.413 1.415L12 9.768l-6.587 6.586L4 14.94l8.001-8z"
        />
      </svg>
      <span>맨&nbsp;위로&nbsp;이동</span>
    </FixButton>
  );
}
