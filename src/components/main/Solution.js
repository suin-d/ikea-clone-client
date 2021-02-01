import React from 'react';
import styled from 'styled-components';
import SolutionItem from './SolutionItem';

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
  margin-bottom: 32px;
  h1 {
    font-size: 25px;
    font-weight: 700;
  }
`;

const SolutionBox = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const solutionItems = [
  {
    id: 0,
  },
  {
    id: 1,
    src:
      'https://www.ikea.com/images/f8/58/f858ed7c6797c35c437b2ee9ea8144be.jpg?f=xl',
    name: '물과 에너지 아끼기',
  },
  {
    id: 2,
    src:
      'https://www.ikea.com/images/9c/14/9c1469cd6cdd7d646df5ddd84d1217ed.jpg?f=xl',
    name: '지속가능한 소재',
  },
  {
    id: 3,
    src:
      'https://www.ikea.com/images/1d/21/1d212111111d0f0bb859e8aa4a946936.jpg?f=m',
    name: '건강한 집',
  },
  {
    id: 4,
    src:
      'https://www.ikea.com/images/58/f9/58f9dba846ffe2072a9040c34638cec3.jpg?f=l',
    name: '지속가능한 먹거리',
  },
  {
    id: 5,
    src:
      'https://www.ikea.com/images/f8/58/f858ed7c6797c35c437b2ee9ea8144be.jpg?f=xl',
    name: '지속가능한 가구',
  },
];

export default function Solution() {
  return (
    <>
      <TitleBox>
        <h1>지속가능한 내일을 위한 솔루션</h1>
      </TitleBox>
      <SolutionBox>
        {solutionItems.map((item) => (
          <SolutionItem
            key={item.id}
            id={item.id}
            src={item.src}
            name={item.name}
          />
        ))}
      </SolutionBox>
    </>
  );
}
