import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import styled from 'styled-components';

const ReviewScoreContainer = styled.h4`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  cursor: pointer;
  span {
    font-size: 11px;
    margin-left: 13px;
    color: #484848;
  }
`;

export default function ReviewScore({ reviewCnt, setReviewOpen }) {
  return (
    <ReviewScoreContainer onClick={() => setReviewOpen(true)}>
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarHalf />
      {reviewCnt && <span>{`(${reviewCnt})`}</span>}
    </ReviewScoreContainer>
  );
}
