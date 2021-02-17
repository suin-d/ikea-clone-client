import React from 'react';
import { BiBuildings } from 'react-icons/bi';
import { GrDeliver } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { addCart } from '../../modules/product/thunk';
import ButtonBig from '../common/buttons/ButtonBig';
import ButtonWish from '../common/buttons/ButtonWish';
import ReviewScore from './review/ReviewScore';

const CheckMsg = styled.div`
  width: 100%;
  padding: 23px 0;
  word-break: keep-all;
  color: #484848;
  display: flex;
  align-items: center;
  svg {
    font-size: 21px;
    margin-right: 13px;
  }
  p {
    flex: 1;
  }
  i {
    margin-left: 6px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #0a8a00;
  }
  & + & {
    border-top: 1px solid #dfdfdf;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 15px;
  button:nth-child(1) {
    height: 57px;
    flex: 1;
  }
`;
const ProPrice = styled.section`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h1 {
    font-size: 21px;
    margin-bottom: 13px;
    font-weight: 700;
  }
  p {
    text-decoration: line-through;
    font-size: 14px;
    color: #484848;
  }
`;
const ProName = styled.section`
  flex: 0.8;
  h1 {
    margin-bottom: 13px;
    font-size: 22px;
    font-weight: 700;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    word-break: keep-all;
  }
  p {
    margin-bottom: 17px;
    font-size: 14px;
    color: #484848;
  }
  h4 {
    margin-top: 11px;
  }
`;
const ProInfo = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 45px;
`;
const DetailInfoContainer = styled.article`
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 90px;
  margin-right: 35px;
  .sale-text {
    color: #ed022a;
    font-weight: 600;
    margin-bottom: 12px;
    padding: 0;
  }
  @media ${({ theme }) => theme.mobile} {
    margin-right: 0px;
  }
`;
const DetailInfoWrapper = styled.div`
  flex: 3;
  position: relative;
  p {
    font-size: 14px;
  }
`;
export default function DetailInfo({ setReviewOpen, product, grade }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userInfo } = useSelector((state) => state.user);
  const onAddCart = () => {
    if (userInfo) {
      dispatch(addCart({ userEmail: userInfo.email, productId: product.id }));
    } else {
      history.push('/user/signin');
    }
  };
  return (
    <DetailInfoWrapper>
      <DetailInfoContainer>
        {product.prCost !== product.slCost && (
          <p className="sale-text">더 낮은 새로운 가격</p>
        )}
        <ProInfo>
          <ProName>
            <h1>
              <span>{product.title}</span>
            </h1>
            <p>{`${product.summary} ${product.size}`}</p>
            <ReviewScore
              reviewCnt={product.Reviews.length}
              setReviewOpen={setReviewOpen}
              grade={grade}
            />
          </ProName>
          <ProPrice>
            <h1>{`₩${product.slCost.toLocaleString()}`}</h1>
            {product.prCost !== product.slCost && (
              <p>{`₩${product.prCost.toLocaleString()}`}</p>
            )}
          </ProPrice>
        </ProInfo>
        <ButtonWrapper>
          <ButtonBig onClick={onAddCart}>구매하기</ButtonBig>
          <ButtonWish data={product} />
        </ButtonWrapper>
        <CheckMsg>
          <GrDeliver />
          <p>배송 여부는 결제 단계에서 확인하실 수 있습니다.</p>
          <i />
        </CheckMsg>
        <CheckMsg>
          <BiBuildings />
          <p>온라인에서만 구매 가능한 상품입니다.</p>
          <i />
        </CheckMsg>
      </DetailInfoContainer>
    </DetailInfoWrapper>
  );
}
