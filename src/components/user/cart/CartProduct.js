import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeCart } from '../../../modules/user/thunk';
import { addWish } from '../../../modules/product/thunk';

const CartItem = styled.li`
  display: flex;
  letter-spacing: 1px;
  max-width: 100%;
  font-size: 12px;
  padding: 2rem 0;
  figure {
    max-width: 140px;
    margin-right: 40px;
    img {
      width: 100%;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px 0;
    article {
      flex: 1;
      display: flex;
      justify-content: space-between;
      div:nth-of-type(1) {
        flex: 1;
        h2 {
          font-weight: bold;
          margin-bottom: 5px;
        }
        span {
          font-weight: 300;
          margin-bottom: 7px;
          display: inline-block;
        }
        div {
          font-weight: 300;
          margin-bottom: 5px;
        }
      }
      div:nth-of-type(2) {
        font-weight: bold;
        strong {
        }
      }
    }
    & > div {
      button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 3px 0px;
        outline: none;
        font-size: 12px;
      }
      button + button {
        margin-left: 25px;
      }
    }
  }
  & + & {
    border-top: 1px solid #dfdfdf;
  }
`;

export default function CartProduct({ data, userInfo }) {
  const imgIndex = data.ProdImages[0] ? data.ProdImages[0] : null;
  const dispatch = useDispatch();

  const onRemoveCart = () => {
    dispatch(removeCart({ email: userInfo.email, productId: data.id }));
  };

  const onAddWishRemoveCart = () => {
    dispatch(addWish({ userEmail: userInfo.email, productId: data.id }));
    dispatch(removeCart({ email: userInfo.email, productId: data.id }));
  };

  return (
    <CartItem>
      <figure>
        {imgIndex && (
          <img
            srcSet={imgIndex.srcSet}
            size={imgIndex.sizes}
            src={imgIndex.src}
            alt={imgIndex.info}
          />
        )}
      </figure>
      <div>
        <article>
          <div>
            <h2>{data.title}</h2>
            <span>{data.summary}</span>
            <div>{data.size && data.size}</div>
          </div>
          <div>
            <strong>
              <span>￦</span>
              {data.slCost.toLocaleString()}
            </strong>
          </div>
        </article>
        <div>
          <button onClick={onRemoveCart}>삭제</button>
          <button onClick={onAddWishRemoveCart}>위시리스트 저장</button>
        </div>
      </div>
    </CartItem>
  );
}
