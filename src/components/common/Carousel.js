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
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2300,
  pauseOnHover: true,
  className: '',
  slidesToShow: 3,
  slidesToScroll: 1,
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
