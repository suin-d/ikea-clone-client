import React from 'react';
import styled from 'styled-components';

const NavBox = styled.div`
  flex: 2;
  ul li:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  ul:nth-child(1) {
    li {
      margin-top: 30px;
      font-size: 36px;
      font-weight: bold;
    }
  }
  ul:nth-child(2) {
    margin-top: 20px;
    li {
      font-weight: 600;
      margin-top: 25px;
      font-size: 14px;
    }
  }
  ul:nth-child(3) {
    margin-top: 40px;
    li {
      margin-top: 18px;
      font-size: 14px;
    }
  }
`;
export const NavContentBox = styled.div`
  width: 420px;
  position: relative;
  display: flex;
  height: 100%;
  & > i {
    padding-top: 50px;
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: 25px;
    svg {
      position: sticky;
      top: 100px;
      cursor: pointer;
    }
  }
`;
export default function MainNav({ onToggleNav, navState }) {
  console.log(navState);
  return (
    <NavContentBox>
      <i />
      <NavBox>
        <ul>
          <li onClick={() => onToggleNav(1)}>모든 제품</li>
          <li onClick={() => onToggleNav(2)}>디지털 쇼룸</li>
        </ul>
        <ul>
          <li>할인중</li>
          <li>신제품</li>
          <li>아이디어</li>
          <li>더 낮은 새로운 가격</li>
          <li>새로운 소식</li>
        </ul>
        <ul>
          <li>매장안내</li>
          <li>IKEA Family</li>
          <li>고객지원</li>
          <li>배송조회</li>
          <li>내 프로필</li>
        </ul>
      </NavBox>
    </NavContentBox>
  );
}
