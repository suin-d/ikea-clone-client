import React, { useState } from 'react';
import styled from 'styled-components';
import { GrDeliver } from 'react-icons/gr';
import { BiBuildings } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import Cate from '../components/common/Cate';
import ButtonBig from '../components/common/buttons/ButtonBig';
import ReviewScore from '../components/proReview/ReviewScore';
import ReviewDraw from '../components/proReview/ReviewDraw';

const DetailInfoBox = styled.div`
  flex: 3;
  position: relative;
  article {
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
    p + div {
      display: flex;
      gap: 5px;
      margin-bottom: 45px;
      section:nth-child(1) {
        flex: 0.8;
        h1 {
          margin-bottom: 13px;
          font-size: 22px;
          font-weight: 700;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        p {
          margin-bottom: 17px;
          font-size: 14px;
          color: #484848;
        }
        h4 {
          margin-top: 11px;
        }
      }
      section:nth-child(2) {
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
      }
    }
    div + div {
      display: flex;
      gap: 18px;
      margin-bottom: 15px;
      button:nth-child(1) {
        height: 57px;
      }
    }
    & > p {
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
    }
    & > p + p {
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
  }
  p {
    font-size: 14px;
  }
`;
const ReviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  border-top: 1px solid #dfdfdf;
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
function DetailInfo({ setReviewOpen }) {
  return (
    <DetailInfoBox>
      <article>
        <p className="sale-text">더 낮은 새로운 가격</p>
        <div>
          <section>
            <h1>
              <span>{product.proNameEn}</span>
              <span>{product.proNameKo}</span>
            </h1>
            <p>{product.proInfo}</p>
            <ReviewScore
              reviewCnt={product.reviewCnt}
              setReviewOpen={setReviewOpen}
            />
          </section>
          <section>
            <h1>{product.proPrice}</h1>
            <p>{product.proOriPrice}</p>
          </section>
        </div>
        <div>
          <ButtonBig>구매하기</ButtonBig>
          <button>❤</button>
        </div>
        <p>
          <GrDeliver />
          배송 여부는 결제 단계에서 확인하실 수 있습니다.
          <i />
        </p>
        <p>
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
        </p>
      </article>
    </DetailInfoBox>
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
        <DetailInfo setReviewOpen={setReviewOpen} />
      </DetailTopContainer>
      {reviewOpen && (
        <ReviewDraw reviewOpen={reviewOpen} setReviewOpen={setReviewOpen} />
      )}
    </>
  );
}
