import React from 'react';
import styled from 'styled-components';

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  label {
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #929292;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    display: none;
  }
  p {
    padding-bottom: 2px;
    margin-left: 5px;
    font-size: 15px;
    color: #333;
  }
  input:checked + label {
    &::after {
      content: '';
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: #0058a3;
    }
  }
`;
export default function CheckboxSimple({ title, value = false, onChange }) {
  return (
    <CheckBoxContainer>
      <input id="cbox" type="checkbox" onChange={onChange} checked={value} />
      <label htmlFor="cbox" />
      <p>{title}</p>
    </CheckBoxContainer>
  );
}
