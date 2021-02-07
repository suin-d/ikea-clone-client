import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CateBox = styled.ul`
  display: flex;
  gap: 6px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #dfdfdf;
  font-size: 12px;
  color: #484848;
  li {
    display: flex;
    gap: 4px;
  }
`;

export default function Cate({ pro }) {
  return (
    <CateBox>
      <li>제품</li>
      <li>
        <MdKeyboardArrowRight />
      </li>
      <li>{pro.cate1}</li>
      <li>
        <MdKeyboardArrowRight />
      </li>
      <li>{pro.cate2}</li>
      <li>
        <MdKeyboardArrowRight />
      </li>
      <li>
        <span>{pro.proNameEn}</span>
        <span>{pro.proNameKo}</span>
        <span>{pro.proInfo}</span>
      </li>
    </CateBox>
  );
}
