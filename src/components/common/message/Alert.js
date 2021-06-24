import React, { useCallback, useEffect, useState } from 'react';
import { RiNotification4Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { ALERT_RESET } from 'modules/interface';

const slideOff = keyframes`
from{
    opacity:1;
    transform:translateX(0)
}
to{
    opacitu:0;
    transform:translateX(300px)
}
`;
const slideOn = keyframes`
from{
    opacity:0;
    transform:translateX(300px)
}
to{
    opacitu:1;
    transform:translateX(0)
}
`;
const MessageBox = styled.div`
  z-index: 9999;
  width: 300px;
  height: 100px;
  background: rgba(36, 7, 7, 0.9);
  position: fixed;
  bottom: 50px;
  right: 30px;
  box-shadow: 2px 2px 3px black;
  padding: 15px 30px 20px 30px;
  color: #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h5 {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
  }
  span {
    font-size: 14px;
    line-height: 1.2;
  }
  animation: ${slideOn} 0.5s normal forwards;
  ${props =>
    props.close &&
    css`
      animation: ${slideOff} 0.5s normal forwards;
    `}
  @media ${({ theme }) => theme.mobile} {
    width: 80%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    bottom: 20px;
    right: 10%;
    h5 {
      b {
        display: none;
      }
    }
  }
`;

export default function Alert() {
  const dispatch = useDispatch();
  const { alertMsg } = useSelector(state => state.interfaces);
  const [close, setClose] = useState(false);
  const alert = useCallback(
    time => {
      setTimeout(() => {
        setClose(true);
      }, time - 700);
      setTimeout(() => {
        dispatch({
          type: ALERT_RESET,
        });
        setClose(false);
      }, time);
    },
    [dispatch]
  );
  useEffect(() => {
    if (alertMsg) {
      alert(5000, dispatch);
    }
  }, [alertMsg, dispatch, alert]);
  if (alertMsg) {
    return (
      <MessageBox close={close}>
        <h5>
          <b>알림</b>
          <RiNotification4Line />
        </h5>
        <span>{alertMsg}</span>
      </MessageBox>
    );
  }
  return null;
}
