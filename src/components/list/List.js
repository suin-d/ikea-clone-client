import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ButtonRound from '../common/buttons/ButtonRound';
import ListItem from './ListItem';

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ListWrapper = styled.div`
  position: relative;
  & > h1 {
    font-size: 1.563rem;
    font-weight: bold;
    margin: 60px 0;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    position: sticky;
    top: 0;
    z-index: 9999;
    background: #fff;
    & > ul {
      display: flex;
      li {
        margin-right: 10px;
      }
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.75rem;
      span,
      b {
        display: inline-block;
        padding: 1em;
      }
      b:nth-child(2) {
        text-decoration: underline;
      }
      b {
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  ${(props) =>
    props.active &&
    css`
      div {
        div {
          b:nth-child(3) {
            text-decoration: underline;
          }
          b:nth-child(2) {
            text-decoration: none;
          }
        }
      }
    `}
`;
function List({ title, data }) {
  const [listState, setListState] = useState(0);
  return (
    <ListWrapper active={listState === 1}>
      <h1>{title}</h1>
      <div>
        <ul>
          <li>
            <ButtonRound>전체 상품</ButtonRound>
          </li>
          <li>
            <ButtonRound gray>정렬</ButtonRound>
          </li>
          <li>
            <ButtonRound gray>가격</ButtonRound>
          </li>
        </ul>
        <div>
          <span>{`${data.length}개`}</span>
          <b onClick={() => setListState(0)}>제품</b>
          <b onClick={() => setListState(1)}>디지털 쇼룸</b>
        </div>
      </div>
      <ListContainer>
        {data.map((item) => (
          <ListItem listState={listState} data={item} key={item.id} />
        ))}
      </ListContainer>
    </ListWrapper>
  );
}
export default List;
