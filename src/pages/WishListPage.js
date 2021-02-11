import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import ButtonBig from '../components/common/buttons/ButtonBig';
import { CircleButton } from '../components/common/buttons/ButtonCart';
import GoStore from '../components/wish/GoStore';
import WishItems from '../components/wish/WishItems';
import WishReceipt from '../components/wish/WishReceipt';
import useCheckLogin from '../hooks/useCheckLogin';
import { getWishList } from '../modules/user/thunk';
import { addCart } from '../modules/product/thunk';

const CartButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  p {
    font-size: 14px;
  }
  button {
    width: 270px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 20px;
    }
  }
`;
const WishNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 40px;
  li {
    font-size: 14px;
    font-weight: 700;
    color: #767676;
    padding-bottom: 18px;
    cursor: pointer;
  }
  ${(props) =>
    props.navState &&
    css`
      li:nth-child(${props.navState}) {
        color: #111;
        border-bottom: 3px solid #0058a3;
        padding-bottom: 19px;
        transform: translateY(2px);
      }
    `};
`;
const PrintIcon = styled(CircleButton)`
  background: none;
  border: none;
  svg {
    fill: #484848;
  }
  &:hover {
    background: #dfdfdf;
  }
`;
const WishListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  h2 {
    font-size: 25px;
    font-weight: 700;
  }
`;
const WishListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
export default function WishListPage() {
  const userInfo = useCheckLogin();
  const dispatch = useDispatch();
  const { getWishData } = useSelector((state) => state.user);
  const [navState, setNavState] = useState(1);
  const onNav = (state) => {
    setNavState(state);
  };
  const onAddCartAll = () => {
    getWishData.forEach(
      (data) =>
        dispatch(addCart({ userEmail: userInfo.email, productId: data.id }))
      // eslint-disable-next-line function-paren-newline
    );
  };
  useEffect(() => {
    if (userInfo !== null) {
      dispatch(getWishList(userInfo.email));
    }
  }, [dispatch, userInfo]);
  if (!getWishData) return null;
  return (
    <WishListContainer>
      <WishListTitle>
        <h2>내 쇼핑목록</h2>
        <PrintIcon>
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            className="list-ingka-svg-icon list-ingka-btn__icon"
            aria-hidden="true"
          >
            <path d="M8 6h8v2H8V6zM13 10H8v2h5v-2z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 2h16v20H4V2zm2 2v16h12V4H6z"
            />
          </svg>
        </PrintIcon>
      </WishListTitle>
      <WishNav navState={navState}>
        <li onClick={() => onNav(1)}>온라인으로 구매하기</li>
        <li onClick={() => onNav(2)}>매장에서 구매하기</li>
      </WishNav>
      {navState === 1 && (
        <WishItems userInfo={userInfo} wishItems={getWishData} />
      )}
      {navState === 2 && <GoStore />}
      <WishReceipt wishItems={getWishData} />
      <CartButtonBox>
        <p>이 제품을 온라인으로 구매하시겠어요?</p>
        <ButtonBig onClick={onAddCartAll}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z" />
            </g>
          </svg>
          모든 제품 장바구니에 추가하기
        </ButtonBig>
      </CartButtonBox>
    </WishListContainer>
  );
}
