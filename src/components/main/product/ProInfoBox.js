import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const showOn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const InfoBox = styled.div`
  min-width: 120px;
  display: none;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 18px 8px 18px 18px;
  background: #ffffff;
  box-shadow: 0 0 5px #484848;
  animation: ${showOn} 0.2s ease-in-out forwards;
  cursor: pointer;
  div {
    flex: 1;
    h1 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    p {
      font-size: 14px;
      margin-bottom: 12px;
    }
    span {
      font-weight: 700;
      font-size: 15px;
    }
  }
  ${(props) =>
    props.active &&
    css`
      display: flex;
    `}
`;

const ArrowBtnBox = styled.div`
  font-size: 23px;
  font-weight: 700;
  margin-left: 10px;
  transform: translate(0, -5px);
`;

export default function ProInfoBox({ data, active, onLeave }) {
  const history = useHistory();
  return (
    <InfoBox
      active={active}
      onMouseLeave={onLeave}
      onClick={() => history.push(`/detail/${data.shortId}`)}
    >
      <div>
        <h1>{data.proNameEn}</h1>
        <h1>{data.proNameKo}</h1>
        <p>{data.proInfo}</p>
        <span>{data.proPrice}</span>
      </div>
      <ArrowBtnBox>
        <IoIosArrowForward />
      </ArrowBtnBox>
    </InfoBox>
  );
}
