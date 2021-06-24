import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsBox = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 65px;
  @media ${({ theme }) => theme.mobile} {
    gap: 10px;
    padding: 0 20px;
  }
`;

export default function News({ newsItems }) {
  return (
    <NewsBox>
      {newsItems.map(item => (
        <NewsItem key={item.id} data={item} />
      ))}
    </NewsBox>
  );
}
