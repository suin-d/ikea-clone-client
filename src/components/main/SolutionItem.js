import React from 'react';
import styled from 'styled-components';
import { IoArrowForwardOutline } from 'react-icons/io5';
import ButtonRound from '../common/buttons/ButtonRound';

const FirstBox = styled.div`
  background: #00a553;
  position: relative;
  flex: 1;
  /* padding: 20px; */
  p {
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    margin: 40px 30px;
    line-height: 1.5rem;
    word-break: keep-all;
  }
  button {
    position: absolute;
    bottom: 20px;
    left: 30px;
    width: 2.5rem;
    padding: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ItemBox = styled.div`
  position: relative;
  flex: 1;
  img {
    width: 100%;
    /* height: auto; */
  }
  button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export default function SolutionItem({ id, src, name }) {
  // console.log(id);
  return (
    <>
      {id === 0 && (
        <FirstBox>
          <p>집에서 지속가능한 생활을 실천할 수 있는 아이디어</p>
          <ButtonRound white>
            <IoArrowForwardOutline />
          </ButtonRound>
        </FirstBox>
      )}
      {id >= 1 && (
        <ItemBox>
          <img src={src} alt="" />
          <ButtonRound white>{name}</ButtonRound>
        </ItemBox>
      )}
    </>
  );
}
