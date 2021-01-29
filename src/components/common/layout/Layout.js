import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderMenu from '../header/HeaderMenu';
import NavDraw from '../menu/NavDraw';

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
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <HeaderMenu setNavOpen={setNavOpen} />
      <LayoutBox>
        <MainContent>{children}</MainContent>
      </LayoutBox>
      {navOpen && <NavDraw setNavOpen={setNavOpen} />}
    </>
  );
}
