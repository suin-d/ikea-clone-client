import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  flex: 1;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 0;
  i {
    color: #484848;
    font-size: 20px;
    font-weight: 600;
  }
  span {
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: #484848;
  }
  a {
    font-size: 14px;
    color: #484848;
  }
`;

export default function CsItem({ data }) {
  return (
    <ItemBox>
      <i>{data.icon}</i>
      <span>{data.title}</span>
      <p>{data.text}</p>
      <a href="/">더 보기</a>
    </ItemBox>
  );
}
