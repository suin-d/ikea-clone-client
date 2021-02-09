import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import AccountInfo from './AccountInfo';
import AcountSetting from './AcountSetting';
import AddressInfo from './AddressInfo';

const ListMenuBox = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    font-size: 14px;
    font-weight: bold;
    padding: 15px 0;
    width: 31%;
    border-bottom: 3px solid #dfdfdf;
    cursor: pointer;
  }
  ${(props) =>
    props.active &&
    css`
      li:nth-child(${props.active}) {
        border-bottom: 3px solid #0058a3;
      }
    `}
`;
function ListMenu({ current, set }) {
  return (
    <ListMenuBox active={current}>
      <li onClick={() => set(1)}>계정</li>
      <li onClick={() => set(2)}>주소</li>
      <li onClick={() => set(3)}>설정</li>
    </ListMenuBox>
  );
}
const InfoContainer = styled.ul`
  width: 100%;
  li {
    width: 100%;
    padding: 35px 0;
    border-bottom: 1px solid #eee;
    h5 {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      b {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    form {
      margin-top: 20px;
    }
    article {
      span {
        display: block;
        font-size: 14px;
        line-height: 1.7;
      }
    }
  }
`;
export default function MyInfo({ userInfo }) {
  const [currentMenu, setCurrentMenu] = useState(1);
  return (
    <div>
      <ListMenu current={currentMenu} set={setCurrentMenu} />
      <InfoContainer>
        {currentMenu === 1 && <AccountInfo userInfo={userInfo} />}
        {currentMenu === 2 && <AddressInfo userInfo={userInfo} />}
        {currentMenu === 3 && <AcountSetting userInfo={userInfo} />}
      </InfoContainer>
    </div>
  );
}
