import React from 'react';
import styled from 'styled-components';
import ButtonRound from 'components/common/buttons/ButtonRound';

const ItemBox = styled.li`
  position: relative;
  flex: 1;
  img {
    width: 100%;
    /* height: auto; */
  }
  button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export default function SolutionItem({ data }) {
  return (
    <ItemBox>
      <img src={data.src} alt={data.name} />
      <ButtonRound white>{data.name}</ButtonRound>
    </ItemBox>
  );
}
