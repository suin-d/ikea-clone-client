import React from 'react';
import styled from 'styled-components';
import { RiMenuLine } from 'react-icons/ri';
import LOGO from '../../../assets/img/logo.svg';
import IconContainer from './IconContainer';
import SearchBar from './SearchBar';

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 2 / 14;
  ul {
    display: flex;
    align-items: center;
    margin-left: 20px;
    li {
      padding: 10px 15px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const MenuBtnBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  svg {
    cursor: pointer;
    position: fixed;
    top: 50px;
  }
`;
const HeaderContainer = styled.div`
  max-width: 1800px;
  margin: 30px 40px 50px 20px;
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));
  grid-gap: 20px;
`;
export default function HeaderMenu({ setNavOpen }) {
  return (
    <HeaderContainer>
      <MenuBtnBox>
        <RiMenuLine onClick={() => setNavOpen(true)} />
      </MenuBtnBox>

      <HeaderBar>
        <img src={LOGO} alt="" />
        <ul>
          <li>모든제품</li>
          <li>디지털 쇼룸</li>
        </ul>
        <SearchBar />
        <IconContainer />
      </HeaderBar>
    </HeaderContainer>
  );
}
