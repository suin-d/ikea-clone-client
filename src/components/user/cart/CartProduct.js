import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeCart, changeCart } from '../../../modules/user/thunk';
import { addWish } from '../../../modules/product/thunk';
import SelectNumber from '../../common/inputs/SelectNumber';

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
        span:nth-of-type(2) {
          text-decoration: line-through;
        }
        div {
          font-weight: 300;
          margin-bottom: 5px;
        }
      }
      & > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        strong {
          font-weight: bold;
        }
        div {
          margin-top: 5px;
        }
      }
    }
    & > div {
      margin-top: 20px;
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
  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    align-items: center;
    figure {
      margin-right: 0;
    }
    & > div:last-child {
      width: 100%;
    }
  }
`;

export default function CartProduct({ data, userInfo }) {
  const imgIndex = data.Product ? data.Product.ProdImages[0] : null;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(data.quantity);

  const onChangeQuantity = e => {
    setQuantity(e.target.value);
    const data1 = {
      cartId: data.id,
      quantity: parseInt(e.target.value, 10),
    };
    dispatch(changeCart(data1));
  };

  const onRemoveCart = () => {
    dispatch(removeCart({ email: userInfo.email, productId: data.Product.id }));
  };

  const onAddWishRemoveCart = () => {
    dispatch(
      addWish({ userEmail: userInfo.email, productId: data.Product.id })
    );
    dispatch(removeCart({ email: userInfo.email, productId: data.Product.id }));
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
            <h2>{data.Product.title}</h2>
            <span>{data.Product.summary}</span>
            <div>{data.Product.size}</div>
            <div>{`수량: ${data.quantity}`}</div>

            {data.Product.prCost !== data.Product.slCost && (
              <span>
                {`할인 전 가격: ${(
                  data.Product.prCost * data.quantity
                ).toLocaleString()}원`}
              </span>
            )}
            <div>
              {`총액: ${(
                data.Product.slCost * data.quantity
              ).toLocaleString()}원`}
            </div>
          </div>
          <div>
            <strong>{`￦${data.Product.slCost.toLocaleString()}`}</strong>
            <div>/&nbsp;개</div>
          </div>
        </article>
        <div>
          <SelectNumber onChange={onChangeQuantity} value={quantity} />
          <button onClick={onRemoveCart}>삭제</button>
          <button onClick={onAddWishRemoveCart}>위시리스트 저장</button>
        </div>
      </div>
    </CartItem>
  );
}
