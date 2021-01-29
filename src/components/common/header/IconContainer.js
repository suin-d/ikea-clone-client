import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiTruckLine,
  RiUser3Line,
  RiShoppingBagLine,
  RiHeartLine,
} from 'react-icons/ri';
import styled from 'styled-components';

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  margin-left: 20px;
  padding: 13px;
  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    border-radius: 50%;
    &:hover {
      background: #f5f5f5;
    }
  }
`;

export default function IconContainer() {
  return (
    <BtnWrapper>
      <Link to="/signin">
        <RiTruckLine />
      </Link>
      <Link to="/signin">
        <RiUser3Line />
      </Link>
      <Link to="/signin">
        <RiHeartLine />
      </Link>
      <Link to="/signin">
        <RiShoppingBagLine />
      </Link>
    </BtnWrapper>
  );
}
