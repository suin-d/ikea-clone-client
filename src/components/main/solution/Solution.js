import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import styled from 'styled-components';
import ButtonRound from '../../common/buttons/ButtonRound';
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
  @media ${({ theme }) => theme.mobile} {
    padding: 0 20px;
  }
`;
const FirstBox = styled.li`
  background: #00a553;
  position: relative;
  flex: 1;
  /* padding: 20px; */
  p {
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    padding: 40px 30px;
    width: 100%;
    height: 100%;
    line-height: 1.5rem;
    word-break: keep-all;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    position: absolute;
    bottom: 20px;
    left: 30px;
    width: 2.5rem;
    padding: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const SolutionBox = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  @media ${({ theme }) => theme.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    flex-wrap: wrap;
    & > li {
      width: 100%;
      &:hover {
        button:not(${FirstBox}>button) {
          opacity: 0;
        }
      }
      button:not(${FirstBox}>button) {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        font-size: 16px;
        border-radius: 0;
        border: none;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
const solutionItems = [
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
        <FirstBox>
          <p>집에서 지속가능한 생활을 실천할 수 있는 아이디어</p>
          <ButtonRound white>
            <IoArrowForwardOutline />
          </ButtonRound>
        </FirstBox>
        {solutionItems.map((item) => (
          <SolutionItem key={item.id} data={item} />
        ))}
      </SolutionBox>
    </>
  );
}
