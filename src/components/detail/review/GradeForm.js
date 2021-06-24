import React from 'react';
import styled, { css } from 'styled-components';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

const Star = styled.i`
  ${props =>
    props.state === 0 &&
    css`
      color: #bfbfbf;
    `};
  ${props =>
    (props.state === 1 || props.state === 2) &&
    css`
      color: #0058a3;
    `};
`;
const InputGrade = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 17px;
    cursor: pointer;
  }
`;

export default function GradeForm({ grade, setGrade, setUserGrade }) {
  const onClickStar = (index, state) => {
    let g = [];
    let ug = 0;

    for (let i = 0; i < index; i += 1) {
      g = [...g, { id: i, state: 2 }];
    }
    if (index < 4) {
      if (grade[index + 1].state !== 0) {
        g = [...g, { id: index, state: 2 }];
      } else {
        g = [...g, { id: index, state: state === 0 ? 2 : state - 1 }];
      }
    } else {
      g = [...g, { id: index, state: state === 0 ? 2 : state - 1 }];
    }
    for (let i = index + 1; i <= 4; i += 1) {
      g = [...g, { id: i, state: 0 }];
    }
    for (let i = 0; i <= 4; i += 1) {
      ug += g[i].state * 0.5;
    }

    setGrade(g);
    setUserGrade(ug);
  };
  return (
    <InputGrade>
      <ul>
        {grade.map(star => (
          <li onClick={() => onClickStar(star.id, star.state)} key={star.id}>
            {star.state === 0 && (
              <Star state={star.state}>
                <BsStar />
              </Star>
            )}
            {star.state === 1 && (
              <Star state={star.state}>
                <BsStarHalf />
              </Star>
            )}
            {star.state === 2 && (
              <Star state={star.state}>
                <BsStarFill />
              </Star>
            )}
          </li>
        ))}
      </ul>
    </InputGrade>
  );
}
