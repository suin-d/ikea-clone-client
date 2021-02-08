import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import Cate from '../components/common/Cate';
import ReviewScore from '../components/detail/review/ReviewScore';
import ReviewDraw from '../components/detail/review/ReviewDraw';
import DetailInfo from '../components/detail/DetailInfo';

const ReviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  border-top: 1px solid #dfdfdf;
  cursor: pointer;
  div {
    p {
      font-size: 14px;
      font-weight: 700;
    }
    h4 {
      margin-top: 11px;
    }
  }
`;
const DetailAboutBox = styled.div`
  display: flex;
  flex-direction: column;
  & > div:nth-child(1) {
    margin-top: 88px;
    margin-bottom: 60px;
    p {
      font-size: 12px;
      color: #484848;
    }
    span {
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      background: #000;
      color: #fff;
      margin-top: 13px;
      padding: 5px 12px;
    }
  }
`;
const DetailPicContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  div {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`;
const DetailMainBox = styled.div`
  flex: 7;
`;
const DetailTopContainer = styled.div`
  display: flex;
  gap: 62px;
  margin-top: 64px;
`;

const product = {
  fullId: 'boholmen-inset-sink-1-bowl-stainless-steel-s99177679',
  shortId: 's99177679',
  img: [
    'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0770896_PE755642_S5.JPG?f=m',
    'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0944427_PE797252_S5.JPG?f=xs',
    'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0788147_PE763489_S5.JPG?f=l',
    'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0788148_PE763488_S5.JPG?f=m',
    'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0970313_PE811023_S5.JPG?f=s',
  ],
  proNameEn: 'ANGERSBY',
  proNameKo: '앙에르스뷔',
  proInfo: '2인용소파',
  proPrice: '₩149,000',
  proOriPrice: '₩169,000',
  cate1: '가구',
  cate2: '소파',
  reviewCnt: 14,
};

function DetailPic() {
  return (
    <DetailPicContainer>
      {product.img.map((item) => (
        <div>
          <img key={item} src={item} alt={item} />
        </div>
      ))}
    </DetailPicContainer>
  );
}
function DetailAbout({ setReviewOpen }) {
  return (
    <DetailAboutBox>
      <div>
        <p>제품 번호</p>
        <span>{product.shortId}</span>
      </div>
      <ReviewBox onClick={() => setReviewOpen(true)}>
        <div>
          <p>상품평</p>
          <ReviewScore
            reviewCnt={product.reviewCnt}
            setReviewOpen={setReviewOpen}
          />
        </div>
        <IoIosArrowForward />
      </ReviewBox>
    </DetailAboutBox>
  );
}

export default function DetailPage() {
  const [reviewOpen, setReviewOpen] = useState(false);

  return (
    <>
      <Cate pro={product} />
      <DetailTopContainer>
        <DetailMainBox>
          <DetailPic />
          <DetailAbout setReviewOpen={setReviewOpen} />
        </DetailMainBox>
        <DetailInfo setReviewOpen={setReviewOpen} product={product} />
      </DetailTopContainer>
      {reviewOpen && (
        <ReviewDraw reviewOpen={reviewOpen} setReviewOpen={setReviewOpen} />
      )}
    </>
  );
}
