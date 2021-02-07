import React from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';

const ReviewListContainer = styled.div`
  width: 100%;
`;
const reviews = [
  {
    id: 0,
    userId: 'user01',
    commentTitle: '너무너무 좋아요',
    commentContent: '으아아ㅏ아ㅏ 좋아요 진짜에요! 믿고 사세요',
    userGrade: 4.5,
    createdAt: '2021-01-11',
    commentRecom: true,
    cmimgSrc:
      'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0944427_PE797252_S5.JPG?f=s',
  },
  {
    id: 1,
    userId: 'user02',
    commentTitle: '너무요',
    commentContent: '으아아ㅏ아ㅏ 좋아요 진짜에요! 믿고 사세요',
    userGrade: 4.5,
    createdAt: '2021-01-12',
    commentRecom: true,
    cmimgSrc:
      'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0944427_PE797252_S5.JPG?f=s',
  },
  {
    id: 2,
    userId: 'user03',
    commentTitle: '좋아요',
    commentContent: '으아아ㅏ아ㅏ 좋아요 진짜에요! 믿고 사세요',
    userGrade: 4.5,
    createdAt: '2021-01-13',
    commentRecom: true,
    cmimgSrc:
      'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0944427_PE797252_S5.JPG?f=s',
  },
];

export default function ReviewList() {
  return (
    <ReviewListContainer>
      {reviews.map((item) => (
        <ReviewItem key={item.id} item={item} />
      ))}
    </ReviewListContainer>
  );
}
