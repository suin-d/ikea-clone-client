import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

const ItemBox = styled.div`
  position: relative;
  flex: 1;
  img {
    width: 100%;
    height: auto;
  }
  img + div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.315);
    transition: all ease-in 0.1s;
  }
  &:hover {
    .newpro-item-rgba {
      background: none;
    }
    .newpro-info-box {
      display: none;
    }
  }
`;

const InfoBox = styled.div`
  min-width: 120px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 18px 8px 18px 18px;
  background: #ffffff;
  transition: all ease-in 0.1s;
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
`;

const ArrowBtnBox = styled.div`
  font-size: 23px;
  font-weight: 700;
  margin-left: 10px;
  transform: translate(0, -5px);
`;

export default function NewProItem({
  src,
  link,
  // srcset, sizes, fullId, shortId, categoryId, cateName,
}) {
  return (
    <ItemBox>
      <a href={link}>
        <img src={src} alt="" />
        <div className="newpro-item-rgba" />
        <InfoBox className="newpro-info-box">
          <div>
            <h1>VARDAGEN</h1>
            <h1>바르다겐</h1>
            <p>찻잔세트</p>
            <span>₩ 4,900</span>
          </div>
          <ArrowBtnBox>
            <IoIosArrowForward />
          </ArrowBtnBox>
        </InfoBox>
      </a>
    </ItemBox>
  );
}
