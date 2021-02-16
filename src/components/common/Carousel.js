/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  h1 {
    font-size: 1.563rem;
    font-weight: bold;
    padding: 1.6em 0;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 0 0 0 20px;
  }
`;

const initialSettings = {
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

export default function Carousel({
  title,
  data,
  ItemComponent,
  setting = initialSettings,
}) {
  return (
    <Container>
      <h1>{title}</h1>
      <Slider {...setting}>
        {data.map((item) => (
          <ItemComponent data={item} key={item.id} />
        ))}
      </Slider>
    </Container>
  );
}
