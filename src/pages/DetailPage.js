import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Cate from '../components/common/Cate';
import ReviewScore from '../components/detail/review/ReviewScore';
import ReviewDraw from '../components/detail/review/ReviewDraw';
import DetailInfo from '../components/detail/DetailInfo';
import { getProduct } from '../modules/product/thunk';

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
    margin-top: 25px;
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
  @media ${({ theme }) => theme.mobile} {
    order: 3;
  }
`;
const DetailPicImageGallery = styled.div`
  @media ${({ theme }) => theme.desktop} {
    display: none;
  }
  @media ${({ theme }) => theme.mobile} {
    display: block;
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
  @media ${({ theme }) => theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 20px;
    order: 2;
  }
`;
const DetailMainBox = styled.div`
  flex: 7;
  & > p {
    font-size: 14px;
    width: 500px;
    color: #484848;
    line-height: 1.7;
    margin-top: 80px;

    @media ${({ theme }) => theme.mobile} {
      width: auto;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    display: flex;
    flex-direction: column;
    border-top: 2px solid #dfdfdf;
    padding-top: 60px;
    p {
      order: 1;
      margin-top: 0px;
    }
  }
`;
const DetailTopContainer = styled.div`
  display: flex;
  gap: 62px;
  margin-top: 64px;
  @media ${({ theme }) => theme.mobile} {
    flex-direction: column-reverse;
    margin-top: 40px;
    gap: 40px;
  }
`;

function DetailAbout({ setReviewOpen, product }) {
  return (
    <DetailAboutBox>
      <div>
        <p>제품 번호</p>
        <span>{product.id}</span>
      </div>
      <ReviewBox onClick={() => setReviewOpen(true)}>
        <div>
          <p>상품평</p>
          <ReviewScore
            reviewCnt={product.Reviews.length}
            setReviewOpen={setReviewOpen}
            grade={product.grade}
          />
        </div>
        <IoIosArrowForward />
      </ReviewBox>
    </DetailAboutBox>
  );
}

function DetailPic({ product }) {
  return (
    <DetailPicContainer>
      {product.ProdImages.map((item) => (
        <div key={item.id}>
          <img
            key={item.id}
            srcSet={item.srcSet}
            sizes={item.sizes}
            src={item.src}
            alt={item.info}
          />
        </div>
      ))}
    </DetailPicContainer>
  );
}

export default function DetailPage({ match }) {
  const [reviewOpen, setReviewOpen] = useState(false);
  const { getProductData: product } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const images =
    product &&
    product.ProdImages.map((v) => ({
      srcSet: `${v.srcSet}`,
      sizes: `${v.sizes}`,
      original: `${v.src}`,
      thumbnail: `${v.src}`,
      originalAlt: `${v.info}`,
    }));

  useEffect(() => {
    document.title = 'IKEA | 상품정보';
    dispatch(getProduct(match.params.id));
  }, [dispatch, match]);
  if (!product) return <div>데이터가 없습니다</div>;
  return (
    <div>
      <Cate
        bCate={product.BCategory}
        sCate={product.SCategory}
        title={product.title}
        summary={product.summary}
      />
      <DetailTopContainer>
        <DetailMainBox>
          <DetailPic product={product} />
          <p>{product.detailInfo}</p>
          <DetailAbout setReviewOpen={setReviewOpen} product={product} />
        </DetailMainBox>
        <DetailInfo
          setReviewOpen={setReviewOpen}
          product={product}
          grade={product.grade}
        />
        <DetailPicImageGallery>
          <ReactImageGallery items={images} />
        </DetailPicImageGallery>
      </DetailTopContainer>
      {reviewOpen && (
        <ReviewDraw reviewOpen={reviewOpen} setReviewOpen={setReviewOpen} />
      )}
    </div>
  );
}
