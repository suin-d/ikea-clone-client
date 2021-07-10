import React from 'react';
import styled from 'styled-components';
import { ModalContainer } from './ModalLayout';
import { AiFillAlert } from 'react-icons/ai';

const AlertModalBox = styled.div`
  width: 600px;
  background-color: #fff;
  padding: 30px 20px;
  h2 {
    display: flex;
    align-items: center;
    color: #0058a3;
    font-weight: 600;
    font-size: 32px;
    span {
      margin-left: 10px;
      font-size: 28px;
    }
    strong {
      font-size: 20px;
      flex: 1;
      cursor: pointer;
      text-align: end;
    }
  }
  ul {
    margin: 20px 0;
    li {
      color: #777;
      padding: 4px 0;
      margin-left: 30px;
      list-style: circle;
      font-weight: 400;
      small {
        font-size: 12px;
        color: #0058a3;
      }
    }
  }
`;
export default function AlertModal({ onClose }) {
  const onClickBg = e => {
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <ModalContainer onClick={onClickBg}>
      <AlertModalBox>
        <h2>
          <AiFillAlert />
          <span>알립니다!</span>
          <span>Caution!</span>
          <strong onClick={onClose}>닫기</strong>
        </h2>
        <ul>
          <li>본 사이트는 실제 IKEA 홈페이지가 아닙니다.</li>
          <li>해당 사이트는 연습목적으로 IKEA 홈페이지를 구현한 것입니다.</li>
          <li>결제는 테스트 용도이기 때문에 실제로 청구되지 않습니다.</li>
          <li>
            모든 저작권 및 라이센스는
            <small> © Inter IKEA Systems B.V 1999-2021</small> 에 있습니다.
          </li>
        </ul>
        <ul>
          <li>This site is not an actual IKEA website.</li>
          <li>
            This site is an implementation of the IKEA homepage for practice
            purposes.
          </li>
          <li>
            All copyrights and licenses belong to
            <small> © Inter IKEA Systems B.V 1999-2021</small>
          </li>
        </ul>
      </AlertModalBox>
    </ModalContainer>
  );
}
