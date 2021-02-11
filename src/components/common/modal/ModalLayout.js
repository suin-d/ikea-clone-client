import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
from{
  transform:translateY(600px)
}
to{
  transform:translateY(0)
}
`;
const fadeIn = keyframes`
from{
  opacity:0
}
to{
  opacity:1
}
`;
const CloseBtn = styled.i`
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 40px;
  color: #fff;
  cursor: pointer;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
const ModalBox = styled.div`
  max-width: 700px;
  padding: 30px 30px;
  background: #fff;
  animation: ${slideUp} 0.2s ease-in-out;
  & > h1 {
    font-size: 25px;
    font-weight: bold;
    color: #0058a3;
    margin-bottom: 10px;
  }
`;
export default function ModalLayout({ title = '', children, close }) {
  return (
    <ModalContainer>
      <CloseBtn onClick={close}>
        <RiCloseFill />
      </CloseBtn>
      <ModalBox>
        <h1>{title}</h1>
        {children}
      </ModalBox>
    </ModalContainer>
  );
}
