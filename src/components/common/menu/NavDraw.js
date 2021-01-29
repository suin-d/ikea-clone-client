import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { RiAddLine } from 'react-icons/ri';
import LOGO from '../../../assets/img/logo.svg';
import MainNav from './MainNav';
import ProductNav from './ProductNav';

const slideOn = keyframes`
from{
  transform:translateX(-500px)
}
to{
  transform:translateX(0)
}
`;

const NavBottom = styled.div`
  display: flex;
`;
const NavTop = styled.div`
  width: 420px;
  height: 92px;
  display: flex;
  position: sticky;
  background: #fff;
  top: 0;
  z-index: 100;
  i {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 33px;
    justify-content: center;
    svg {
      cursor: pointer;
      transform: rotate(45deg);
    }
  }
  div {
    display: flex;
    align-items: center;
    flex: 2;
  }
`;
const NavDrawBox = styled.nav`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  animation: ${slideOn} 0.3s ease-in-out forwards;
  /* overflow-y: scroll; */
`;
const NavDrawContainer = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.15);
  width: 100vw;
  height: 100vh;
`;

export default function NavDraw({ setNavOpen }) {
  const [navState, setNavState] = useState(0);
  const onToggleNav = (number) => {
    setNavState(number);
    console.log(navState);
  };
  return (
    <NavDrawContainer>
      <NavDrawBox>
        <NavTop>
          <i>
            <RiAddLine onClick={() => setNavOpen(false)} />
          </i>
          <div>
            <img src={LOGO} alt="로고" />
          </div>
        </NavTop>
        <NavBottom>
          {navState === 0 && <MainNav onToggleNav={onToggleNav} />}
          {navState === 1 && <ProductNav onToggleNav={onToggleNav} />}
        </NavBottom>
      </NavDrawBox>
    </NavDrawContainer>
  );
}
