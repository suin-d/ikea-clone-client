import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { RiMenuLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LOGO from 'assets/img/logo.svg';
import { NAV_MOVE, NAV_OPEN } from 'modules/interface';
import IconContainer from './IconContainer';
import SearchBar from './SearchBar';

const slideUp = keyframes`
from{
  transform:translateY(0)
}
to{
  transform:translateY(-200px)
}
`;
const slideDown = keyframes`
from{
  transform:translateY(-200px)
}
to{
  transform:translateY(0)
}
`;
const HeaderBar = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
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
  @media ${({ theme }) => theme.mobile} {
    flex: 1;
    padding-top: 0px;
    display: flex;
    justify-content: space-between;
    a {
      img {
        height: 100%;
      }
    }
    div:nth-child(4) {
      height: 46px;
      padding: 0;
      a {
        margin: 0;
      }
      a:first-child {
        display: none;
      }
    }
    & > ul {
      display: none !important;
      li {
        display: none;
      }
    }
  }
  ${props =>
    props.open &&
    css`
      animation: ${slideDown} 0.3s normal forwards;
    `}
  ${props =>
    props.open ||
    css`
      animation: ${slideUp} 0.3s normal forwards;
      display: none;
    `}
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
  @media ${({ theme }) => theme.mobile} {
    width: 40px;
    height: 40px;
    margin-top: 4px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.8);
    svg {
      position: static;
      cursor: pointer;
    }
  }
`;
const HeaderContainer = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 0px 40px 50px 20px;
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));
  grid-gap: 20px;

  @media ${({ theme }) => theme.mobile} {
    height: 110px;
    align-items: flex-start;
    display: flex;
    margin: 0;
    background: #fff;
    padding: 20px 15px 0px 15px;
    flex-direction: row-reverse;
    grid-gap: 0px;
    transition: all 0.3s ease;
    max-width: 100vw;
  }
  ${props =>
    !props.open &&
    css`
      @media ${({ theme }) => theme.mobile} {
        height: 0;
        padding: 0px 20px 0px 20px;
        & > div:first-child {
          margin-top: 35px;
        }
      }
    `}
`;

const HeaderWrapper = styled.div`
  z-index: 100;
  position: fixed;
  overflow-y: visible;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export default function HeaderMenu() {
  const current = useRef(0);
  const [headerOpen, setHeaderOpen] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset > 120) {
        if (current.current > window.pageYOffset) {
          setHeaderOpen(true);
        }
        if (current.current < window.pageYOffset) {
          setHeaderOpen(false);
        }
        current.current = window.pageYOffset;
      } else {
        setHeaderOpen(true);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [headerOpen, current]);
  return (
    <HeaderWrapper>
      <HeaderContainer open={headerOpen}>
        <MenuBtnBox>
          <RiMenuLine onClick={() => dispatch({ type: NAV_OPEN })} />
        </MenuBtnBox>

        <HeaderBar open={headerOpen}>
          <Link to="/">
            <img src={LOGO} alt="" />
          </Link>
          <ul>
            <li onClick={() => dispatch({ type: NAV_MOVE, payload: 1 })}>
              모든제품
            </li>
            <li onClick={() => dispatch({ type: NAV_MOVE, payload: 2 })}>
              디지털 쇼룸
            </li>
          </ul>
          <SearchBar headerOpen={headerOpen} />
          <IconContainer />
        </HeaderBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
