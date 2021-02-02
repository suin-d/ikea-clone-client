import React from 'react';
import styled from 'styled-components';
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

const ListHeader = styled.div`
  h1 {
    font-size: 1.563rem;
    font-weight: bold;
    margin: 60px 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    span {
      margin-right: 10px;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.75rem;
      li {
        padding: 0.75em;
      }
    }
  }
`;
export default function List({ title, data }) {
  return (
    <div>
      <ListHeader>
        <h1>{title}</h1>
        <div>
          <div>
            <span>
              <ButtonRound>비교</ButtonRound>
            </span>
            <span>
              <ButtonRound gray>정렬</ButtonRound>
            </span>
            <span>
              <ButtonRound gray>가격</ButtonRound>
            </span>
          </div>
          <ul>
            <li>8개</li>
            <li>제품</li>
            <li>디지털 쇼룸</li>
          </ul>
        </div>
      </ListHeader>
      <ListContainer>
        {data.map((item) => (
          <ListItem data={item} key={item.id} />
        ))}
      </ListContainer>
    </div>
  );
}
