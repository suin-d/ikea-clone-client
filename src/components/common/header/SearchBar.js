import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { search } from 'modules/product/thunk';

const ResultBox = styled.li`
  width: 100%;
  height: 150px;
  padding: 10px 20px;
  &:hover {
    background: #eee;
  }
  & > div {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      height: 100%;
    }
    article {
      display: flex;
      height: 80%;
      flex-direction: column;
      justify-content: space-around;
      strong {
        font-size: 16px;
        font-weight: bold;
      }
      small {
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
`;
const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mobile} {
    left: 0;
    position: absolute;
    bottom: -100%;
    width: calc(100% + 40px);
  }
`;
const SearchBox = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  width: 100%;
  min-width: 500px;
  max-width: 700px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  z-index: 1001;
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
    svg {
      cursor: pointer;
    }
  }
  & > ul {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0px;
    margin-left: 0 !important;
    background: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    transition: all 0.3s;
  }
  @media ${({ theme }) => theme.mobile} {
    bottom: -20px;
    height: 50px;
    width: 100%;
    min-width: auto;
    max-width: auto;
    margin-left: 0px;
    input {
      margin: 0;
    }
  }
  ${props =>
    props.active &&
    css`
      background: #fff;
      & > ul {
        width: 100%;
        height: 600px;
        bottom: -600px;
        margin-left: 0;
      }
    `}
`;

function ResultItem({ data, close }) {
  const history = useHistory();
  const goDetail = () => {
    history.push(`/detail/${data.id}`);
    close();
  };
  return (
    <ResultBox>
      <div onClick={goDetail}>
        <img src={data.ProdImages[0].src} alt={data.id} />
        <article>
          <strong>{data.title}</strong>
          <small>{data.SCategory.name}</small>
        </article>
      </div>
    </ResultBox>
  );
}
export default function SearchBar({ headerOpen }) {
  const { searchData } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const [searchActive, setSearchActive] = useState(false);
  const [keyword, setKeyword] = useState('');

  const onChangeKeyword = e => {
    setKeyword(e.target.value);
    dispatch(search(e.target.value));
  };
  const searchClose = () => {
    setSearchActive(false);
    setKeyword('');
  };
  useEffect(() => {
    if (!headerOpen) {
      setSearchActive(false);
    }
  }, [headerOpen]);
  return (
    <>
      <SearchContainer>
        <SearchBox active={searchActive}>
          <span>
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder="검색어 입력"
            value={keyword}
            onClick={() => setSearchActive(true)}
            onChange={onChangeKeyword}
          />
          <span>
            {searchActive && (
              <ImCancelCircle onClick={() => setSearchActive(false)} />
            )}
          </span>
          <ul>
            {searchData &&
              searchData.map(v => (
                <ResultItem key={v.id} data={v} close={searchClose} />
              ))}
          </ul>
        </SearchBox>
      </SearchContainer>
    </>
  );
}
