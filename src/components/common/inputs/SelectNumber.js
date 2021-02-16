import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.span`
  line-height: 1.5;
  margin: 0;
  color: #111;
  font-weight: bold;
  height: 2.5rem;
  background: none;
  border: 1px solid #dfdfdf;
  border-radius: 64px;
  font-weight: 300;
  margin-right: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  select {
    padding: 0 1rem;
    outline: none;
    border: none;
    width: 100%;
    height: 90%;
    cursor: pointer;
    background: none;
  }
`;
const arr = [];
for (let i = 1; i < 100; i += 1) {
  arr.push({ id: i, value: i });
}

export default function SelectNumber({ onChange, value }) {
  return (
    <StyledSelect name="quantity">
      <select name="" id="" onChange={onChange} defaultValue={value}>
        {arr.map((v) => (
          <option value={v.value} key={v.id}>
            {v.value}
          </option>
        ))}
      </select>
    </StyledSelect>
  );
}
