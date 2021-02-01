/* eslint-disable indent */
import React from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonNext from '../common/buttons/ButtonNext';
import DESK from '../../assets/img/desk.jpg';

/*
const PromoBox = styled.div`
  width: 530px;
  height: 727px;
  display: flex;
  border: 1px solid red;
  background-color: #f7dc6f;
`;

const PromoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;
*/
/*
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
*/

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    background: none;
    width: 519px;
    height: 208px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    h3 {
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
    }
    span {
      justify-content: flex-start;
      margin-top: 60px;
    }
    ${(props) =>
      props.yellow &&
      css`
        background: #f7dc6f;
      `}
    ${(props) =>
      props.cheese &&
      css`
        background: #ebc699;
      `}
        ${(props) =>
      props.gray &&
      css`
        background: #a19d9c;
      `}
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const Container = styled.div`
  overflow: hidden;
  h1 {
    font-size: 1.563rem;
    font-weight: bold;
    padding: 1.6em 0;
  }
`;

const items = [
  { id: 1, url: DESK },
  { id: 2, url: DESK },
  { id: 3, url: DESK },
  { id: 4, url: DESK },
];

const settings = {
  dots: true, // 캐러셀의 점을 보여줄 것인지
  infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
  speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
  arrows: true, // 옆으로 이동하는 화살표 표시 여부
  autoplay: true, // 자동 스크롤 사용 여부
  autoplaySpeed: 2750, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
  pauseOnHover: true, // 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
  className: '', // className도 설정 가능
  slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
  slidesToScroll: 1, // 스크롤 한번에 움직일 컨텐츠 개수
};

export default function Promo() {
  return (
    // <PromoContainer>
    //   <PromoBox>언텍트로 만나는 IKEA</PromoBox>
    //   <PromoBox>언텍트로 만나는 IKEA</PromoBox>
    //   <PromoBox>언텍트로 만나는 IKEA</PromoBox>
    // </PromoContainer>
    <Container>
      <h1>진행 중인 이벤트 및 프로모션</h1>
      <StyledSlider {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <ImageContainer>
              <Image src={item.url} />
            </ImageContainer>
          </div>
        ))}
        <DescriptionContainer>
          <li cheese>
            <h3>IKEA 기프트 카드로 준비하는 선물같은 새해</h3>
            <span>
              <ButtonNext />
            </span>
          </li>
          <li gray>
            <h3>
              언택트로 만나는 IKEA: 비대면 서비스로 제품주문부터 플래닝까지
            </h3>
            <span>
              <ButtonNext />
            </span>
          </li>
          <li yellow>
            <h3>보여주세요! IKEA로 꾸민 당신의 집</h3>
            <span>
              <ButtonNext />
            </span>
          </li>
        </DescriptionContainer>
      </StyledSlider>
    </Container>
  );
}
