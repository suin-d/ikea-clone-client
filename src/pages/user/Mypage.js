import React from 'react';
import styled from 'styled-components';
import MyInfo from '../../components/user/mypage/MyInfo';
import WellComeNav from '../../components/user/mypage/WellComeNav';
import useCheckLogin from '../../hooks/useCheckLogin';

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mobile} {
    padding: 0 20px;
  }
`;

export default function MyPage() {
  const userInfo = useCheckLogin();
  if (!userInfo) return null;
  return (
    <Inner>
      <WellComeNav userInfo={userInfo} />
      <MyInfo userInfo={userInfo} />
    </Inner>
  );
}
