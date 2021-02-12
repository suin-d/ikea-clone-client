import React from 'react';
import { BiBuildings } from 'react-icons/bi';
import { GrDeliver } from 'react-icons/gr';
import styled, { css } from 'styled-components';
import ButtonBig from '../common/buttons/ButtonBig';
import ButtonWish from '../common/buttons/ButtonWish';
import ReviewScore from './review/ReviewScore';

const CheckMsg = styled.p`
  padding: 23px 0;
  word-break: keep-all;
  color: #484848;
  display: flex;
  align-items: center;
  svg {
    font-size: 21px;
    margin-right: 13px;
  }
  i {
    margin-left: 6px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #0a8a00;
  }
  ${(props) =>
    props.state === 'stock' &&
    css`
      & {
        border-top: 1px solid #dfdfdf;
        display: flex;
        align-items: flex-start;
        i {
          background-color: #e00751;
        }
        div {
          span {
            display: block;
          }
          span + span {
            margin-top: 11px;
          }
        }
      }
    `};
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
`;
const DetailInfoWrapper = styled.div`
  flex: 3;
  position: relative;
  p {
    font-size: 14px;
  }
`;
export default function DetailInfo({ setReviewOpen, product }) {
  // TODO:
  // 구매하기 버튼에 장바구니 추가함수 연결하기
  // 다른 매장 재고에 a태그 들어가있음 a태그 기본기능=(새로고침)
  // DetailPage안에서 p 태그에 validateDOMNesting(...): <div> cannot appear as a descendant of <p>.에러뜨는중
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
              reviewCnt={product.reviewCnt}
              setReviewOpen={setReviewOpen}
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
          <ButtonBig>구매하기</ButtonBig>
          <ButtonWish data={product} />
        </ButtonWrapper>
        <CheckMsg>
          <GrDeliver />
          배송 여부는 결제 단계에서 확인하실 수 있습니다.
          <i />
        </CheckMsg>
        <CheckMsg state="stock">
          <BiBuildings />
          <div>
            <span>
              <a href="/detail">고양</a>
              에서는 임시 품절되었습니다.
              <i />
            </span>
            <span>
              <a href="/detail">다른 매장 재고 확인</a>
            </span>
          </div>
        </CheckMsg>
      </DetailInfoContainer>
    </DetailInfoWrapper>
  );
}
