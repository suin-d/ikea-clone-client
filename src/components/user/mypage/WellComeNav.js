import QrCode from 'qrcode.react';
import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../modules/user/thunk';

const MyNavItem = styled.li`
  width: 31%;
  height: 80px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    p > b {
      text-decoration: underline;
    }
  }
  p {
    b {
      display: block;
      margin-bottom: 7px;
      font-size: 15px;
    }
    span {
      font-size: 13px;
    }
  }
`;

function NavItem({ title = '', desc = '', link = '' }) {
  const history = useHistory();
  const goLink = () => {
    history.push(link);
  };
  return (
    <MyNavItem onClick={goLink}>
      <p>
        <b>{title}</b>
        <span>{desc}</span>
      </p>
      <BsArrowRight />
    </MyNavItem>
  );
}

const WellComeInfo = styled.section`
  display: flex;
  justify-content: space-between;
  article {
    b {
      font-size: 34px;
      font-weight: bold;
      display: block;
      margin-bottom: 10px;
    }
    span,
    small {
      font-size: 14px;
    }
    small {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  div {
    box-shadow: 0 0 30px #9e9e9e;
    width: 350px;
    border-radius: 10px;
    background: #007cc8;
    height: 230px;
    h1 {
      padding: 10px 20px;
      color: #fff;
      width: 100%;
      height: 110px;
      border-bottom: 10px solid #ffdb01;
      font-weight: bold;
      p {
        font-size: 18px;
      }
      span {
        font-size: 30px;
      }
    }
    h2 {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      padding: 10px 20px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        align-self: flex-end;
        font-size: 13px;
      }
    }
  }
`;
const WellComeConatiner = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
  }
`;
const makeMessage = (data, name) => {
  console.log(data);
  if (data.length === 0) {
    return `${name}가 비었습니다.`;
  }
  return `저장된 리스트 ${data.length}개`;
};
export default function WellComeNav({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const info = `
회원명:${userInfo.name}
email:${userInfo.email}
전화번호:${userInfo.phone}
주소:${userInfo.address}
  `;
  const onLogout = () => {
    dispatch(logout(userInfo.email));
    history.replace('/');
  };
  return (
    <WellComeConatiner>
      <WellComeInfo>
        <article>
          <b>{`안녕하세요, ${userInfo.name}님!`}</b>
          <span>로그아웃을 하고 싶으신가요?</span>
          <small onClick={onLogout}>로그아웃</small>
        </article>
        <div>
          <h1>
            <p>IKEA Family</p>
            <span>{userInfo.name}</span>
          </h1>
          <h2>
            <span>1231-3222-4444-5555</span>
            <QrCode value={info} size={100} />
          </h2>
        </div>
      </WellComeInfo>
      <ul>
        <NavItem
          title="주문내역"
          desc={makeMessage(userInfo.Histories, '주문내역')}
          link="/user/history"
        />
        <NavItem
          title="위시 리스트"
          desc={makeMessage(userInfo.wishItem, '위시리스트')}
          link="/user/wish"
        />
        <NavItem
          title="장바구니"
          desc={makeMessage(userInfo.Carts, '장바구니')}
          link="/user/cart"
        />
      </ul>
    </WellComeConatiner>
  );
}
