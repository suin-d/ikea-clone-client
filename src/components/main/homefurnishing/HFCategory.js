/* eslint-disable function-paren-newline */
import React from 'react';
import styled from 'styled-components';
import ButtonRound from 'components/common/buttons/ButtonRound';

const HFCateContainer = styled.ul`
  display: flex;
  margin-bottom: 15px;
  button + button {
    margin-left: 15px;
  }
  button {
    white-space: nowrap;
  }
  @media ${({ theme }) => theme.mobile} {
    height: 60px;
    overflow-x: scroll;
    padding-left: 10px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const cateData = [
  { id: 0, name: '침실' },
  { id: 1, name: '거실' },
  { id: 2, name: '주방' },
  { id: 3, name: '홈오피스' },
  { id: 4, name: '아웃도어' },
  { id: 5, name: '욕실' },
  { id: 6, name: '어린이 IKEA' },
  { id: 7, name: '다이닝' },
  { id: 8, name: '현관' },
];
export default function HFCategory({ setCateId, cateId }) {
  return (
    <HFCateContainer>
      {cateData.map(v =>
        cateId === v.id ? (
          <ButtonRound black key={v.id} onClick={() => setCateId(v.id)}>
            {v.name}
          </ButtonRound>
        ) : (
          <ButtonRound gray key={v.id} onClick={() => setCateId(v.id)}>
            {v.name}
          </ButtonRound>
        )
      )}
    </HFCateContainer>
  );
}
