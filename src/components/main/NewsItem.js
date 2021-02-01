import React from 'react';
import styled from 'styled-components';
import ButtonRound from '../common/buttons/ButtonRound';

const ItemBox = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 32px;
    cursor: pointer;
  }
`;

export default function NewsItem({ imgSrc, src, name }) {
  return (
    <ItemBox>
      <a href={src}>
        <img src={imgSrc} alt="" />
      </a>
      <a href={src}>
        <ButtonRound>{name}</ButtonRound>
      </a>
    </ItemBox>
  );
}
