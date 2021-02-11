import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { removeWish, addCart } from '../../modules/product/thunk';
import ButtonRound from '../common/buttons/ButtonRound';

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  button {
    margin-top: 23px;
    font-size: 15px;
    font-weight: 600;
    height: 50px;
  }
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 13px;
    color: #484848;
  }
  .p-sale-red {
    color: #ed022a;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .p-prCost {
    font-weight: 300;
    margin-top: 8px;
  }
  h2 {
    font-weight: 700;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: #484848;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
`;
const ImgWrapper = styled.div`
  width: 112px;
  height: 112px;
  margin: 0 16px 16px 0;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;
const ContentLeft = styled.div`
  display: flex;
`;
const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 15px;
    font-weight: 700;
  }
`;
const WishItemContainer = styled.li`
  width: 100%;
  padding-top: 35px;
  padding-bottom: 25px;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WishListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function WishItem({ userInfo, item }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const onDeleteItem = () => {
    dispatch(removeWish({ userEmail: userInfo.email, productId: item.id }));
  };
  const onAddCart = () => {
    dispatch(addCart({ userEmail: userInfo.email, productId: item.id }));
  };
  const onMoveDetail = () => {
    history.push(`/detail/${item.id}`);
  };
  return (
    <WishItemContainer>
      <ContentContainer>
        <ContentLeft>
          <ImgWrapper>
            <img
              srcSet={item.ProdImages[0].srcSet}
              sizes={item.ProdImages[0].sizes}
              src={item.ProdImages[0].src}
              alt={item.ProdImages[0].info}
            />
          </ImgWrapper>
          <ItemInfo>
            {item.slCost !== item.prCost && (
              <p className="p-sale-red">더 낮은 새로운 가격</p>
            )}
            <h2 onClick={onMoveDetail}>{item.title}</h2>
            {item.summary && <span>{item.summary}</span>}
            {item.size && <span>{item.size}</span>}
            <span>{item.id}</span>
            {item.slCost !== item.prCost && (
              <p className="p-prCost">{`정가 ₩ ${item.prCost.toLocaleString()}`}</p>
            )}
          </ItemInfo>
        </ContentLeft>
        <h3>{`₩ ${item.slCost.toLocaleString()}`}</h3>
      </ContentContainer>
      <ButtonContainer>
        <ButtonRound white onClick={onDeleteItem}>
          삭제하기
        </ButtonRound>
        <ButtonRound white onClick={onAddCart}>
          장바구니로 옮기기
        </ButtonRound>
      </ButtonContainer>
    </WishItemContainer>
  );
}
export default function WishItems({ userInfo, wishItems }) {
  return (
    <WishListContainer>
      {wishItems ? (
        wishItems.map((item) => (
          <WishItem key={item.id} userInfo={userInfo} item={item} />
        ))
      ) : (
        <div>위시리스트에 상품이 없습니다!</div>
      )}
    </WishListContainer>
  );
}
