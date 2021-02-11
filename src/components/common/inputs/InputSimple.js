import React from 'react';
import styled, { css } from 'styled-components';

const StyledInputSet = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 5px 0;
  border: none;
  overflow: visible;
  width: 100%;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 0px 9px;
    border: none;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid #929292;
    font-size: 16px;
    outline: none;
    cursor: text;

    &::-webkit-input-placeholder {
      transition: color 300ms ease;
    }
    &:not(:focus)::-webkit-input-placeholder {
      color: transparent;
    }
  }

  hr {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 2px;
    border: none;
    background: #0058a3;
    font-size: 1px;
    will-change: transform, visibility;
    transition: all 200ms ease-out;
    transform: scaleX(0);
    visibility: hidden;
    z-index: 2;
  }
  input:focus ~ hr {
    transform: scaleX(1);
    visibility: visible;
  }

  label {
    position: absolute;
    top: 19px;
    left: 0px;
    font-size: 15px;
    color: #484848;
    transform-origin: 0 -500%;
    transition: transform 300ms ease;
    pointer-events: none;
  }
  input:focus ~ label,
  input:valid ~ label {
    transform: scale(0.75);
  }
  ${(props) =>
    props.warn &&
    css`
      hr {
        background: #df0a51;
      }
      input {
        border-bottom: 2px solid #df0a51;
      }
      label {
        color: #df0a51;
      }
    `}
`;
function InputSimple({
  label,
  value,
  onChange,
  placeholder,
  readOnly = false,
  type = 'text',
  ...rest
}) {
  return (
    <StyledInputSet {...rest}>
      <input
        readOnly={readOnly}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
      <hr />
      <label>{label}</label>
    </StyledInputSet>
  );
}

export default InputSimple;
