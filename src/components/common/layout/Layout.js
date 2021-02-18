import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HeaderMenu from '../header/HeaderMenu';
import NavDraw from '../menu/NavDraw';

const MainContent = styled.div`
  grid-column: 2 / 14;
  width: 100%;
`;
const LayoutBox = styled.main`
  max-width: 1800px;
  margin: 150px 40px 50px 20px;
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));
  grid-gap: 20px;
  @media ${({ theme }) => theme.mobile} {
    display: block;
    box-sizing: initial;
    margin: 0;
    padding: 150px 10px 50px 10px;
    grid-gap: 0px;
    overflow-x: hidden;
  }
`;

export default function Layout({ children }) {
  const { open: navOpen } = useSelector((state) => state.interfaces.navigation);
  return (
    <>
      <HeaderMenu />
      <LayoutBox>
        <MainContent>{children}</MainContent>
      </LayoutBox>
      {navOpen && <NavDraw />}
    </>
  );
}
