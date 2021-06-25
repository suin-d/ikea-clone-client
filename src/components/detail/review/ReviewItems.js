import React from "react";
import {BiCheck} from "react-icons/bi";
import styled from "styled-components";
import dayjs from "dayjs";
import ReviewScore from "./ReviewScore";
import "dayjs/locale/ko";

dayjs.locale("ko");

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
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: auto;
    height: auto;
    padding: 10px;
    max-width: 150px;
    max-height: 150px;
  }
  @media ${({theme}) => theme.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    img {
      padding: 0px;
      max-width: 100%;
      max-height: 200px;
    }
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
const ReviewListContainer = styled.div`
  width: 100%;
`;

function ReviewItem({item}) {
  return (
    <ItemBox>
      <ItemTop>
        <ReviewScore grade={item.grade} />
        <span>
          {`${item.User.name} - ${dayjs(item.createdAt)
            .locale("ko")
            .format("YYYY년 MMMM D일 HH시 ")}`}
        </span>
      </ItemTop>
      <ItemContent>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </ItemContent>
      <ItemImage>
        {item.ReviewImages.map((image, i) => (
          <img src={image.src} alt="상품사진" key={i} />
        ))}
      </ItemImage>
      {item.recommend !== 0 && (
        <CommentRecom>
          <BiCheck />
          <span>추천</span>
        </CommentRecom>
      )}
    </ItemBox>
  );
}

export default function ReviewItems({reviewList}) {
  return (
    <ReviewListContainer>
      {reviewList && reviewList.map((item) => <ReviewItem key={item.id} item={item} />)}
    </ReviewListContainer>
  );
}
