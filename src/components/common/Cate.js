import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const PostCate = styled.ul`
  display: flex;
  gap: 6px;
  span + span {
    margin-left: 4px;
  }
  @media ${({ theme }) => theme.mobile} {
    span + span {
      display: none;
    }
  }
`;
const PreCate = styled.ul`
  display: flex;
  gap: 6px;
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;
const CateBox = styled.ul`
  display: flex;
  gap: 6px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #dfdfdf;
  font-size: 12px;
  color: #484848;
  li {
    word-break: keep-all;
  }
`;

export default function Cate({ bCate, sCate, title, summary }) {
  return (
    <CateBox>
      <li>
        <PreCate>
          <li>제품</li>
          <li>
            <MdKeyboardArrowRight />
          </li>
          <li>{bCate.name}</li>
          <li>
            <MdKeyboardArrowRight />
          </li>
        </PreCate>
      </li>
      <li>
        <PostCate>
          <li>{sCate.name}</li>
          <li>
            <MdKeyboardArrowRight />
          </li>
          <li>
            <span>{title}</span>
            <span>{summary}</span>
          </li>
        </PostCate>
      </li>
    </CateBox>
  );
}
