import React from 'react';
import styled from 'styled-components';
import { BiCheck } from 'react-icons/bi';
import ReviewScore from './ReviewScore';

const CommentRecom = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 35px;
  svg {
    font-size: 17px;
  }
  span {
    font-size: 12px;
  }
`;
const ItemImage = styled.div`
  margin-top: 35px;
  width: 300px;
  height: 300px;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

const ItemContent = styled.div`
  font-size: 14px;
  margin-top: 35px;
  h3 {
    font-weight: 700;
  }
  p {
    margin-top: 15px;
  }
`;
const ItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 35px;
  span {
    font-size: 12px;
  }
`;
const ItemBox = styled.div`
  border-top: 1px solid #dfdfdf;
  margin: 35px 0;
  color: #484848;
`;

export default function ReviewItem({ item }) {
  return (
    <ItemBox>
      <ItemTop>
        <ReviewScore />
        <span>{`${item.userId} - ${item.createdAt}`}</span>
      </ItemTop>
      <ItemContent>
        <h3>{item.commentTitle}</h3>
        <p>{item.commentContent}</p>
      </ItemContent>
      <ItemImage>
        <img src={item.cmimgSrc} alt="상품사진" />
      </ItemImage>
      {item.commentRecom && (
        <CommentRecom>
          <BiCheck />
          <span>추천</span>
        </CommentRecom>
      )}
    </ItemBox>
  );
}
