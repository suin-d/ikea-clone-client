import React, { useEffect } from 'react';
import { RiUser3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ButtonBig from '../../components/common/buttons/ButtonBig';
import CartProduct from '../../components/user/cart/CartProduct';
import useCheckLogin from '../../hooks/useCheckLogin';
import { getCart } from '../../modules/user/thunk';

const CartBottomContainer = styled.div`
  font-weight: 500;
  & > h3 {
    margin-bottom: 10px;
    font-size: 15px;
  }
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 300;
    & > span:nth-of-type(1) {
    }
    & > span:nth-of-type(2) {
    }
  }
  hr {
    border: none;
    border-bottom: 2px solid #111;
    margin: 20px 0;
  }
  & > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 15px;
    b {
      display: inline-block;
    }
    & > span {
      display: inline-block;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: -0.3px;
    }
  }
`;

const CartLoginPromoContainer = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.25rem;
  border: 1px solid #dfdfdf;

  & > div {
    h2 {
      font-weight: bold;
      font-size: 15px;
    }
    div {
      font-weight: 300;
      font-size: 13px;
    }
    h2 + div {
      margin-top: 0.3rem;
    }
  }
  i {
    margin-right: 0.75rem;
    svg {
      font-size: 24px;
    }
  }
`;
const CartTopContainer = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 1.8px;
    margin-bottom: 40px;
  }
  & > button {
    margin-bottom: 40px;
  }
  & > ul {
    width: 100%;
  }
`;

const CartInner = styled.div`
  max-width: 690px;
  margin: 0 auto;
  padding-right: 60px;
  letter-spacing: 0.7px;
`;

export default function CartPage() {
  const { loadCartLoading, loadCartData: data, loadCartError } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const userInfo = useCheckLogin();

  console.log(userInfo); // O

  useEffect(() => {
    if (userInfo) {
      dispatch(getCart(userInfo.email));
    }
  }, [dispatch, userInfo]);

  console.log(data);
  if (loadCartLoading) return <div>장바구니를 로딩중입니다.</div>;
  if (!data) return <div>장바구니에 담긴 상품이 없습니다.</div>;
  if (loadCartError) return <div>에러페이지</div>;
  return (
    <CartInner>
      <CartTopContainer>
        <h1>장바구니</h1>
        <ButtonBig>결제하기</ButtonBig>
        <ul>
          {data &&
            data.map((item) => (
              <CartProduct data={item} key={item.id} userInfo={userInfo} />
            ))}
        </ul>
      </CartTopContainer>
      <CartLoginPromoContainer>
        <div>
          <h2>로그인</h2>
          <div>
            <Link to="/user/signin">로그인 또는 회원가입</Link>
            으로 로그인하시면 더 편리하게 이용하실 수 있어요
          </div>
        </div>
        <i>
          <RiUser3Line />
        </i>
      </CartLoginPromoContainer>

      <CartBottomContainer>
        <h3>주문 내역</h3>
        <div>
          <span>전체 서비스 비용</span>
          <span>
            이 금액에는 배송비가 포함되어 있지 않으며, 배송지에 따라 구매가
            불가할 수 있습니다
          </span>
        </div>
        <hr />
        <div>
          <b>총 주문금액</b>
          <span>₩&nbsp;2,085,800</span>
        </div>
        <ButtonBig>결제하기</ButtonBig>
      </CartBottomContainer>
    </CartInner>
  );
}
