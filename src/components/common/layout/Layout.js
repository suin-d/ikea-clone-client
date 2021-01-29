import React from 'react';
import styled from 'styled-components';
import HeaderMenu from '../header/HeaderMenu';

const MainContent = styled.div`
  grid-column: 2 / 14;
  width: 100%;
`;
const LayoutBox = styled.main`
  max-width: 1800px;
  margin: 30px 40px 50px 20px;
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));
  grid-gap: 20px;
`;

export default function Layout({ children }) {
  return (
    <>
      <HeaderMenu />
      <LayoutBox>
        <MainContent>{children}</MainContent>
      </LayoutBox>
    </>
  );
}
