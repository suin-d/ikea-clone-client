import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { RiAddLine, RiArrowDownSLine } from 'react-icons/ri';
import { NavTop, NavDrawContainer } from 'components/common/menu/NavDraw';

const Filters = [
  { id: 0, name: '신제품 순' },
  { id: 1, name: '낮은 가격 순' },
  { id: 2, name: '높은 가격 순' },
  { id: 3, name: '고객평가' },
  { id: 4, name: '이름' },
  { id: 5, name: '가장 인기있는' },
];
const slideOn = keyframes`
from{
  transform:translateX(700px)
}
to{
  transform:translateX(0)
}
`;
const slideOff = keyframes`
from{
  transform:translateX(0)
}
to{
  transform:translateX(700px)
}
`;
const FilterBottom = styled.div`
  margin-top: 150px;
  padding: 0 40px;
  width: 420px;
  font-size: 14px;
  overflow: hidden;
  opacity: 1;
  transition: all 0.3s ease;
  div {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: inline-block;
      padding: 10px 0;
    }
    label {
      display: flex;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid #929292;
      cursor: pointer;
      justify-content: center;
      align-items: center;
    }
    input {
      display: none;
    }
    input:checked + label {
      &::after {
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #252525;
      }
    }
  }
  ${(props) =>
    props.down &&
    css`
      opacity: 0;
      transition: all 0.3s ease;
    `}
`;

const FilterTop = styled(NavTop)`
  width: 420px;
  height: 92px;
  display: flex;
  flex-direction: column;
  position: fixed;
  background: #fff;
  top: 0;
  z-index: 1005;
  i {
    display: flex;
    align-items: center;
    font-size: 33px;
    justify-content: flex-end;
    right: 0;
    padding: 20px 0;
    svg {
      cursor: pointer;
      transform: rotate(45deg);
    }
  }
  div {
    padding: 15px 40px;
    display: flex;
    align-items: center;
    i {
      right: 0;
      font-size: 20px;
      svg {
        transition: all 0.2s;
        cursor: pointer;
        transform: rotate(0deg);
      }
    }
    h2 {
      font-size: 14px;
      font-weight: bold;
      text-decoration: underline;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    width: 280px;
    i {
      svg {
        fill: #111;
      }
    }
  }
  ${(props) =>
    props.down &&
    css`
      div > i > svg {
        transform: rotate(180deg);
      }
    `}
`;
const FilterBox = styled.nav`
  padding: 15px 40px;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  animation: ${slideOn} 0.3s ease-in-out forwards;
  ${(props) =>
    !props.visible &&
    css`
      animation: ${slideOff} 0.3s ease-in-out forwards;
    `}
  @media ${({ theme }) => theme.mobile} {
    left: 0;
  }
`;
const FilterContainer = styled(NavDrawContainer)`
  display: flex;
`;

export default function ListFilter({
  setFilterOpen,
  currentFilter,
  setCurrentFilter,
}) {
  const [filterVisible, setFilterVisible] = useState(true);
  const [filterDown, setFilterDown] = useState(false);

  const onChangeRadio = (e) => {
    const currentNumber = parseInt(e.target.value, 10);
    const selected = Filters.find((v) => v.id === currentNumber);
    setCurrentFilter(selected.id);
  };

  const filterClose = () => {
    setTimeout(() => {
      setFilterOpen(false);
    }, 300);
    setFilterVisible(false);
  };
  return (
    <FilterContainer>
      <FilterBox visible={filterVisible}>
        <FilterTop down={filterDown}>
          <i>
            <RiAddLine onClick={filterClose} />
          </i>
          <div>
            <h2>정렬</h2>
            <i>
              <RiArrowDownSLine onClick={() => setFilterDown(!filterDown)} />
            </i>
          </div>
        </FilterTop>
        <FilterBottom down={filterDown}>
          {Filters.map((v) => (
            <div key={v.id}>
              <span>{v.name}</span>
              <input
                type="radio"
                id={`radio${v.id}`}
                value={v.id}
                checked={currentFilter === v.id}
                onChange={onChangeRadio}
              />
              <label htmlFor={`radio${v.id}`} />
            </div>
          ))}
        </FilterBottom>
      </FilterBox>
    </FilterContainer>
  );
}
