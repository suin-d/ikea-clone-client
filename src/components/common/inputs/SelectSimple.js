import React from 'react';
import styled, { css } from 'styled-components';

const StyledSelectBox = styled.div`
  label {
    font-size: 11px;
  }
  select {
    width: 100%;
    padding: 10px 0;
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
    background: url('https://cdn.iconscout.com/icon/free/png-256/down-arrow-1767499-1502567.png')
      no-repeat 99% 50%; /* 화살표 모양의 이미지 */
    background-size: 25px;
    border: none;
    border-bottom: 1px solid #929292;
    font-size: 16px;
    &::-ms-expand {
      display: none;
    }
  }
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

export default function SelectSimple({
  title,
  options,
  value,
  onChange,
  ...rest
}) {
  return (
    <StyledSelectBox {...rest}>
      <label>{title}</label>
      <select value={value} onChange={onChange}>
        {options.map((v) => (
          <option value={v.id}>{v.value}</option>
        ))}
      </select>
    </StyledSelectBox>
  );
}
