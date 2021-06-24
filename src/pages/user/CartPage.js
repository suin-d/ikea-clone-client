import React, { useEffect, useMemo } from 'react';
import { RiHeartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ButtonBig from 'components/common/buttons/ButtonBig';
import CartProduct from 'components/user/cart/CartProduct';
import useCheckLogin from 'hooks/useCheckLogin';
import { getCart } from 'modules/user/thunk';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

const CartBottomContainer = styled.div`
  font-weight: 500;
  & > h3 {
    margin-bottom: 10px;
    font-size: 0.938rem;
  }
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    font-size: 0.813rem;
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
    font-size: 0.938rem;
    b {
      display: inline-block;
    }
    & > span {
      display: inline-block;
      font-size: 1.25rem;
      font-weight: bold;
      letter-spacing: -0.3px;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    line-height: 1.4;
    font-size: 0.75rem;
    & > div:nth-of-type(1) {
      & > span:nth-of-type(1) {
        margin-right: 5px;
      }
      & > span:nth-of-type(2) {
        text-align: right;
      }
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
    font-size: 0.875rem;
    h2 {
      font-weight: bold;
    }
    div {
      font-weight: 300;
    }
    h2 + div {
      margin-top: 0.3rem;
    }
  }
  i {
    svg {
      font-size: 1.5rem;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    text-align: justify;
    i {
      svg {
        display: none;
      }
    }
  }
`;
const CartTopContainer = styled.div`
  h1 {
    font-size: 2rem;
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
  letter-spacing: 0.5px;
  line-height: 1.1;
  @media ${({ theme }) => theme.mobile} {
    padding-right: 0%;
  }
`;

const getTotal = data =>
  data.reduce(
    (acc, v) => parseInt(v.quantity, 10) * parseInt(v.Product.slCost, 10) + acc,
    0
  );
export default function CartPage({ history }) {
  const userInfo = useCheckLogin();
  const {
    loadCartLoading,
    loadCartData: data,
    loadCartError,
  } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const totalPrice = useMemo(() => data && getTotal(data), [data]);
  useEffect(() => {
    if (userInfo) {
      dispatch(getCart(userInfo.email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (loadCartLoading) return <Loading />;
  if (!data) return null;
  if (data.length === 0) {
    return <Error text="장바구니에 담긴 상품이 없습니다." />;
  }
  if (loadCartError) return <div>에러페이지</div>;
  return (
    <CartInner>
      <CartTopContainer>
        <h1>장바구니</h1>
        <ButtonBig onClick={() => history.push('/user/payment')}>
          결제하기
        </ButtonBig>
        <ul>
          {data &&
            data.map(item => (
              <CartProduct data={item} key={item.id} userInfo={userInfo} />
            ))}
        </ul>
      </CartTopContainer>
      <CartLoginPromoContainer>
        <div>
          <h2>상품 더 둘러보기</h2>
          <div>
            <Link to="/user/wish">위시리스트</Link>
            <span>에 저장한 상품을 한번 더 둘러보세요</span>
          </div>
        </div>
        <i>
          <RiHeartLine />
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
          <span>{`₩${totalPrice.toLocaleString()}`}</span>
        </div>
        <ButtonBig onClick={() => history.push('/user/payment')}>
          결제하기
        </ButtonBig>
      </CartBottomContainer>
    </CartInner>
  );
}
