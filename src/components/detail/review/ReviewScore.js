import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
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

export default function ReviewScore({ reviewCnt, setReviewOpen, grade }) {
  return (
    <ReviewScoreContainer onClick={() => setReviewOpen(true)}>
      {grade === 0 && (
        <>
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {grade > 0 && grade <= 0.5 && (
        <>
          <BsStarHalf />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {grade > 0.5 && grade <= 1 && (
        <>
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {grade > 1 && grade <= 1.5 && (
        <>
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {grade > 1.5 && grade <= 2 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {grade > 2 && grade <= 2.5 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />
        </>
      )}
      {grade > 2.5 && grade <= 3 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
        </>
      )}
      {grade > 3 && grade <= 3.5 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
        </>
      )}
      {grade > 3.5 && grade <= 4 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
        </>
      )}
      {grade > 4 && grade <= 4.5 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </>
      )}
      {grade > 4.5 && grade <= 5 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </>
      )}
      {reviewCnt && <span>{`(${reviewCnt})`}</span>}
    </ReviewScoreContainer>
  );
}
