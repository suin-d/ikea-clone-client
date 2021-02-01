import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { RiAddLine } from 'react-icons/ri';
import LOGO from '../../../assets/img/logo.svg';
import MainNav from './MainNav';
import ProductNav from './ProductNav';
import ShowRoomNav from './ShowRoomNav';

const slideOn = keyframes`
from{
  transform:translateX(-700px)
}
to{
  transform:translateX(0)
}
`;
const slideOff = keyframes`
from{
  transform:translateX(0)
}
to{
  transform:translateX(-700px)
}
`;
const NavBottom = styled.div`
  display: flex;
`;
const NavTop = styled.div`
  width: 420px;
  height: 92px;
  display: flex;
  position: fixed;
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
  padding-top: 92px;
  /* overflow-y: scroll; */
  ${(props) =>
    !props.visible &&
    css`
      animation: ${slideOff} 0.3s ease-in-out forwards;
    `}
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
  const [navVisible, setNavVisible] = useState(true);
  const onToggleNav = (number) => {
    setNavState(number);
  };
  const navClose = () => {
    setTimeout(() => {
      setNavOpen(false);
    }, 300);
    setNavVisible(false);
  };
  return (
    <NavDrawContainer>
      <NavDrawBox visible={navVisible}>
        <NavTop>
          <i>
            <RiAddLine onClick={navClose} />
          </i>
          <div>
            <img src={LOGO} alt="로고" />
          </div>
        </NavTop>
        <NavBottom>
          {navState === 0 && <MainNav onToggleNav={onToggleNav} />}
          {navState === 1 && <ProductNav onToggleNav={onToggleNav} />}
          {navState === 2 && <ShowRoomNav onToggleNav={onToggleNav} />}
        </NavBottom>
      </NavDrawBox>
    </NavDrawContainer>
  );
}
