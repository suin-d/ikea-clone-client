import React from 'react';
import styled, { css } from 'styled-components';
import ButtonNext from 'components/common/buttons/ButtonNext';

const ListItemBox = styled.li`
  outline: none;
  list-style: none;
  width: 94%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    margin: 0 16px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  article {
    width: 100%;
    background: none;
    height: 208px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    line-height: 1.5;
    h3 {
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      flex: 1;
    }
    &:hover {
      text-decoration: underline;
    }
    span {
      justify-content: flex-start;
    }
  }
  ${(props) => {
    switch (props.color) {
      case 'yellow':
        return css`
          article {
            background: #f7dc6f;
            color: #111;
          }
        `;
      case 'cheese':
        return css`
          article {
            background: #d5a991;
            color: #111;
          }
        `;
      case 'gray':
        return css`
          article {
            background: #a19d9c;
            color: #fff;
          }
        `;
      case 'blue':
        return css`
          article {
            background: #99bbc3;
            color: #eee;
          }
        `;
      default:
        return null;
    }
  }}
`;
export const promoSettings = {
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
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1020,
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

export default function PromoItem({ data }) {
  return (
    <ListItemBox key={data.id} color={data.color}>
      <div>
        <img src={data.srcset} alt={data.name} />
      </div>
      <article>
        <h3>{data.name}</h3>
        <span>
          <ButtonNext />
        </span>
      </article>
    </ListItemBox>
  );
}
