import React from 'react';
import styled from 'styled-components';
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
  transition: all ease-in-out 0.5s;
`;
const WishListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function WishItem({ item }) {
  const onDeleteItem = () => {
    // item.id 삭제하기
  };
  return (
    <WishItemContainer onClick={onDeleteItem}>
      <ContentContainer>
        <ContentLeft>
          <ImgWrapper>
            <img
              srcSet={item.ProdImages.srcSet}
              sizes={item.ProdImages.sizes}
              src={item.ProdImages.src}
              alt={item.ProdImages.info}
            />
          </ImgWrapper>
          <ItemInfo>
            {item.slCost !== item.prCost && (
              <p className="p-sale-red">더 낮은 새로운 가격</p>
            )}
            <h2>{item.title}</h2>
            {item.summary && <span>{item.summary}</span>}
            {item.size && <span>{item.size}</span>}
            <span>{item.id}</span>
            {item.slCost !== item.prCost && (
              <p className="p-prCost">{`정가 ₩ ${item.prCost}`}</p>
            )}
          </ItemInfo>
        </ContentLeft>
        <h3>{`₩ ${item.slCost}`}</h3>
      </ContentContainer>
      <ButtonContainer>
        <ButtonRound white>삭제하기</ButtonRound>
        <ButtonRound white>장바구니로 옮기기</ButtonRound>
      </ButtonContainer>
    </WishItemContainer>
  );
}
export default function WishItems({ wishItems }) {
  return (
    <WishListContainer>
      {wishItems.map((item) => (
        <WishItem key={item.id} item={item} />
      ))}
    </WishListContainer>
  );
}
