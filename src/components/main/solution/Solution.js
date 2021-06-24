import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import styled from 'styled-components';
import ButtonRound from 'components/common/buttons/ButtonRound';
import { solutionItems } from 'mocks/solutionItem';
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
        {solutionItems.map(item => (
          <SolutionItem key={item.id} data={item} />
        ))}
      </SolutionBox>
    </>
  );
}
