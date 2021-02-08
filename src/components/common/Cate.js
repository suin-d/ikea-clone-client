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

export default function Cate({ bCate, sCate, title, summary }) {
  return (
    <CateBox>
      <li>제품</li>
      <li>
        <MdKeyboardArrowRight />
      </li>
      <li>{bCate.name}</li>
      <li>
        <MdKeyboardArrowRight />
      </li>
      <li>{sCate.name}</li>
      <li>
        <MdKeyboardArrowRight />
      </li>
      <li>
        <span>{`${title} ${summary}`}</span>
      </li>
    </CateBox>
  );
}
