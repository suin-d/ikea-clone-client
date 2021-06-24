import React, { useEffect, useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { getReviews } from 'modules/product/thunk';
import ButtonRound from '../../common/buttons/ButtonRound';
import ReviewItems from './ReviewItems';
import ReviewScore from './ReviewScore';
import WriteReviewDraw from './WriteReviewDraw';

const slideOn = keyframes`
  from {
    transform: translateX(700px);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOff = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(700px);
  }
`;
const DrawContentContainer = styled.div`
  padding-right: 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.mobile} {
    padding: 0px;
  }
`;
const DrawHeaderContainer = styled.div`
  padding-right: 50px;
  margin: 35px 0;
  ${props =>
    props.writeReview &&
    css`
      height: 30px;
    `};
  h1 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${props =>
      props.writeReview &&
      css`
        & {
          justify-content: flex-end;
          transform: translateY(-70px);
          transition: 0.1s ease-in all;
        }
      `};
    section.first-section {
      ${props =>
        props.writeReview &&
        css`
          display: none;
        `};
      h2 {
        font-size: 33px;
        font-weight: 700;
        letter-spacing: 0.2px;
        margin-bottom: 13px;
      }
    }
    section.second-section {
      button {
        transition: none;
      }
      ${props =>
        props.writeReview &&
        css`
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            padding: 0;
            font-size: 23px;
            transform: rotate(45deg);
          }
        `};
    }
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 0px;
  }
`;
const DrawBox = styled.div`
  padding-left: 50px;
  flex: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.mobile} {
    margin: 0px;
    padding: 0 36px;
    width: 100%;
  }
`;
const DrawCloseBtnWrapper = styled.div`
  top: 0;
  width: 100%;
  height: 86px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 36px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 0;
    padding: 0;
    font-size: 27px;
    transform: rotate(45deg);
  }
`;
const ReviewDrawBox = styled.div`
  /* width: calc(30vw + 43px); */
  width: 503px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${slideOn} 0.3s ease-in-out forwards;
  ${props =>
    !props.visible &&
    css`
      animation: ${slideOff} 0.3s ease-in-out forwards;
    `};
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;
const ReviewDrawContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  z-index: 1005;
`;

function DrawContainer({ setReviewOpen }) {
  const {
    getProductData: { id, grade },
    getReviewsData: reviewList,
  } = useSelector(state => state.product);
  const { userInfo } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [writeReview, setWriteReview] = useState(false);

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  if (!reviewList) return null;
  return (
    <DrawBox>
      <DrawHeaderContainer writeReview={writeReview}>
        <h1>상품평</h1>
        <div>
          <section className="first-section">
            <h2>{grade}</h2>
            <ReviewScore reviewCnt={reviewList.length} grade={grade} />
          </section>
          <section className="second-section">
            {userInfo && (
              <ButtonRound onClick={() => setWriteReview(!writeReview)}>
                {!writeReview ? '상품평 작성' : <RiAddLine />}
              </ButtonRound>
            )}
          </section>
        </div>
      </DrawHeaderContainer>
      <DrawContentContainer>
        {writeReview && <WriteReviewDraw setReviewOpen={setReviewOpen} />}
        {!writeReview && <ReviewItems reviewList={reviewList} />}
      </DrawContentContainer>
    </DrawBox>
  );
}
export default function ReviewDraw({ reviewOpen, setReviewOpen }) {
  if (reviewOpen) document.body.style.overflow = 'hidden';
  const [drawVisible, setDrawVisible] = useState(true);
  const drawClose = () => {
    setTimeout(() => {
      setReviewOpen(false);
      document.body.style.overflow = 'auto';
    }, 300);
    setDrawVisible(false);
  };

  return (
    <ReviewDrawContainer>
      <ReviewDrawBox visible={drawVisible}>
        <DrawCloseBtnWrapper>
          <ButtonRound>
            <RiAddLine onClick={drawClose} />
          </ButtonRound>
        </DrawCloseBtnWrapper>
        <DrawContainer setReviewOpen={setReviewOpen} />
      </ReviewDrawBox>
    </ReviewDrawContainer>
  );
}
