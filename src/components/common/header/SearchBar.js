import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineSearch, AiOutlineCamera } from 'react-icons/ai';

const SearchContainer = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  flex: 1;
  border-radius: 8px;
  z-index: 1;
  transition: all 0.3s ease;
  input {
    width: 100%;
    height: 50px;
    outline: none;
    border: none;
    background: #f5f5f5;
    border-radius: 25px;
    padding: 0 50px;
    margin: 0 10px;
    transition: background 0.5s ease;
    font-size: 15px;
    &:hover {
      background: #e2e2e2;
    }
    &:focus {
      border: 2px solid #005aa9;
      background: #fff;
    }
  }
  span:first-child {
    position: absolute;
    left: 1.8rem;
    font-size: 20px;
  }
  span:nth-child(3) {
    position: absolute;
    right: 1.8rem;
    font-size: 20px;
  }
  ${(props) =>
    props.active &&
    css`
      background: #fff;
    `}
`;
const DarkBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
`;

export default function SearchBar() {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <SearchContainer active={searchActive}>
        <span>
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          placeholder="검색어 입력"
          onClick={() => setSearchActive(true)}
        />
        <span>
          <AiOutlineCamera />
        </span>
      </SearchContainer>
      {searchActive && <DarkBack onClick={() => setSearchActive(false)} />}
    </>
  );
}
