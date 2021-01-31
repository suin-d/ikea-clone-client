import React, { useState } from 'react';
import { RiArrowLeftLine, RiArrowRightSLine } from 'react-icons/ri';
import styled, { css } from 'styled-components';
import { NavContentBox } from './MainNav';

const ProductNavBox = styled.div`
  flex: 2;
  li {
    color: #111;
  }
  h1 {
    font-size: 22px;
    margin: 40px 0;
    font-weight: bold;
  }
  h2 {
    font-size: 14px;
    font-weight: bold;
    margin: 40px 0 35px 0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  & > ul {
    height: auto;
  }
  & > ul > li {
    height: 30px;
    font-size: 14px;
    padding: 5px 0;
    margin-bottom: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    span {
      flex: 5;
    }
    i {
      flex: 1;
      font-size: 20px;
      color: #aaa;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
const DetailNavBox = styled(ProductNavBox)`
  width: 0;
  overflow: hidden;
  border-left: 1px solid #eee;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  li {
    font-size: 13px;
  }
  ${(props) =>
    props.active &&
    css`
      padding-left: 30px;
      width: 270px;
    `}
`;
const navData = [
  {
    id: 1,
    name: '홈스마트',
    detail: [
      { id: 1, name: '리모콘/무선장치' },
      { id: 2, name: '스마트시스템' },
      { id: 3, name: '스마트 조명' },
      { id: 4, name: '전동 블라인드' },
    ],
  },
  {
    id: 2,
    name: '가구',
    detail: [
      { id: 1, name: '소파/암체어' },
      { id: 2, name: '침대' },
      { id: 3, name: '옷장' },
      { id: 4, name: '식탁/책상' },
      { id: 5, name: '의자' },
      { id: 6, name: 'TV/멀티미디어가구' },
      { id: 7, name: '책장/선반유닛' },
      { id: 8, name: '서랍' },
      { id: 9, name: '수납장/장식장' },
      { id: 10, name: '이동식 선반' },
      { id: 11, name: '야외용 가구' },
      { id: 12, name: '바테이블/의자' },
      { id: 13, name: '카페가구' },
      { id: 14, name: '거실장/찬장/콘솔테이블' },
      { id: 15, name: '칸막이/파티션' },
      { id: 16, name: '어린이가구' },
      { id: 17, name: '영아용가구' },
    ],
  },
  {
    id: 3,
    name: '침대/매트리스',
    detail: [
      { id: 1, name: '침대' },
      { id: 2, name: '매트리스' },
      { id: 3, name: '침구' },
      { id: 4, name: '침대수납' },
      { id: 5, name: '침대협탁' },
      { id: 6, name: '침대갈빗살' },
      { id: 7, name: '침대헤드' },
      { id: 8, name: '메트리스 베이스' },
      { id: 9, name: '침대다리' },
    ],
  },
  {
    id: 4,
    name: '수납/정리',
    detail: [
      { id: 1, name: '옷장' },
      { id: 2, name: 'TV/멀티미디어' },
      { id: 3, name: '책장/선반유닛' },
      { id: 4, name: '수납장/장식장' },
      { id: 5, name: '서랍' },
      { id: 6, name: '후크/벽수납' },
      { id: 7, name: '거실장/찬장/콘솔테이블' },
      { id: 8, name: '수납 솔루션 시스템' },
      { id: 9, name: '이동식 선반' },
      { id: 10, name: '스탠드 옷걸리/신발 수납' },
      { id: 11, name: '소형 수납' },
      { id: 12, name: '이동 보조용품' },
      { id: 13, name: '가방' },
    ],
  },
  {
    id: 5,
    name: '주방가구',
    detail: [
      { id: 1, name: '주방 시스템' },
      { id: 2, name: '주방 벽패널' },
      { id: 3, name: '주방 부속품' },
      { id: 4, name: '주방 싱크대/수도' },
      { id: 5, name: '주방 가전' },
      { id: 6, name: '주방 조리대' },
      { id: 7, name: '주방 조명' },
      { id: 8, name: '주방 아일랜드/키트' },
      { id: 9, name: '주방 벽수납' },
      { id: 10, name: '주방 손잡이' },
      { id: 11, name: '주방 모듈형' },
      { id: 12, name: '주방 펜트리' },
    ],
  },
  {
    id: 6,
    name: '어린이 IKEA',

    detail: [
      { id: 1, name: '영유아' },
      { id: 2, name: '어린이' },
    ],
  },
  {
    id: 7,
    name: '텍스타일',
    detail: [
      { id: 1, name: '침구' },
      { id: 2, name: '커튼/블라인드' },
      { id: 3, name: '욕실 텍스타일' },
      { id: 4, name: '영아용 텍스타일' },
      { id: 5, name: '어린이 텍스타일' },
      { id: 6, name: '패브릭/재봉' },
      { id: 7, name: '주방 텍스타일' },
      { id: 8, name: '테이블 텍스타일' },
      { id: 9, name: '야외용 텍스타일' },
      { id: 10, name: '담요/스로우' },
    ],
  },
  {
    id: 8,
    name: '홈데코',
    detail: [
      { id: 1, name: '화분' },
      { id: 2, name: '양초/홀더' },
      { id: 3, name: '액자/그림/포스터' },
      { id: 4, name: '거울' },
      { id: 5, name: '식물/조화' },
      { id: 6, name: '꽃병/수반' },
      { id: 7, name: '수납함/바구니' },
      { id: 8, name: '시계' },
      { id: 9, name: '장식용품' },
      { id: 10, name: '실내 향' },
      { id: 11, name: '메모판' },
      { id: 12, name: '종이제품' },
      { id: 13, name: '겨울용 소품' },
    ],
  },
  {
    id: 9,
    name: '조명',
    detail: [
      { id: 1, name: 'LED 조명 전구' },
      { id: 2, name: '장식조명' },
      { id: 3, name: '조명' },
      { id: 4, name: '스마트 조명' },
      { id: 5, name: '시스템 조명' },
      { id: 6, name: '야외 조명' },
    ],
  },
  {
    id: 10,
    name: '주방용품',
    detail: [
      { id: 1, name: '주방용품' },
      { id: 2, name: '식품보관/정리' },
      { id: 3, name: '조리용품/제빵도구' },
      { id: 4, name: '제빵도구' },
      { id: 5, name: '칼/도마' },
      { id: 6, name: '디너웨어' },
      { id: 7, name: '유리제품 & 유리병' },
      { id: 8, name: '식기도구' },
      { id: 9, name: '커피/차' },
      { id: 10, name: '서빙웨어' },
      { id: 11, name: '냅킨/냅킨홀더' },
      { id: 12, name: '식기세척용품' },
      { id: 13, name: '주방텍스타일' },
      { id: 14, name: '테이블 텍스타일' },
      { id: 15, name: '어린이 식기' },
    ],
  },
  {
    id: 11,
    name: '욕실',
    detail: [
      { id: 1, name: '욕실용품' },
      { id: 2, name: '욕실 텍스타일' },
      { id: 3, name: '욕실수납' },
      { id: 4, name: '욕실거울' },
      { id: 5, name: '욕실 스툴/벤치' },
      { id: 6, name: '욕실 세면대' },
      { id: 7, name: '욕실 수도꼭지' },
      { id: 8, name: '욕실 샤워기' },
      { id: 9, name: '욕실 조명' },
      { id: 10, name: '욕실 가구세트' },
      { id: 11, name: '욕실 세탁' },
    ],
  },
  {
    id: 12,
    name: '러그/매트/조립가구',
    detail: [
      { id: 1, name: '러그' },
      { id: 2, name: '욕실매트' },
      { id: 3, name: '도어매트' },
      { id: 4, name: '조립마루' },
    ],
  },
  {
    id: 13,
    name: '야외용 제품',
    detail: [
      { id: 1, name: '야외용 가구' },
      { id: 2, name: '야외정리용품' },
      { id: 3, name: '야외화분/식물' },
      { id: 4, name: '파라솔/가제보' },
      { id: 5, name: '야외용 쿠션' },
      { id: 6, name: '야외용 악세서리' },
      { id: 7, name: '야외용바닥재' },
      { id: 8, name: '바비큐' },
      { id: 9, name: '야외러그' },
      { id: 10, name: '야외조명' },
    ],
  },
  {
    id: 14,
    name: '세탁/청소',
    detail: [
      { id: 1, name: '빨래바구니' },
      { id: 2, name: '휴지통/봉투' },
      { id: 3, name: '빨래건조대' },
      { id: 4, name: '다림판' },
      { id: 5, name: '청소용품' },
      { id: 6, name: '식기세척용품' },
      { id: 7, name: '세탁 수납/선반' },
    ],
  },
  {
    id: 15,
    name: '안전용품',
    detail: [
      { id: 1, name: '어린이안전' },
      { id: 2, name: '안전관련용품' },
    ],
  },
  {
    id: 16,
    name: '셀프 인테리어',
    detail: [
      { id: 1, name: '안전' },
      { id: 2, name: '조립공구' },
      { id: 3, name: '야외용바닥재' },
      { id: 4, name: '얼룩제거용품' },
      { id: 5, name: '주방 손잡이' },
      { id: 6, name: '주방 벽패널' },
      { id: 7, name: '어쿠스틱 패널' },
      { id: 8, name: '이동 보조상품' },
    ],
  },
  {
    id: 17,
    name: '화분/식물',
    detail: [
      { id: 1, name: '화분' },
      { id: 2, name: '식물/조화' },
      { id: 3, name: '화분스탠드/이동받침' },
      { id: 4, name: '물뿌리개' },
      { id: 5, name: '원예용품' },
    ],
  },
  {
    id: 18,
    name: '가전제품',
    detail: [
      { id: 1, name: '전동 블라인드' },
      { id: 2, name: '스마트 조명' },
      { id: 3, name: '케이블/충전기' },
      { id: 4, name: '주방 가전' },
      { id: 5, name: '휴대폰/태블릿 액세서리' },
      { id: 6, name: '스피커' },
    ],
  },
  {
    id: 19,
    name: 'IKEA푸드',
    detail: [
      { id: 1, name: '여름 시즌푸드' },
      { id: 2, name: '채식/베이터리안' },
      { id: 3, name: '소스/에피타이저' },
      { id: 4, name: '스택/간식' },
      { id: 5, name: '씨푸드/해산물' },
      { id: 6, name: '빵/유제품' },
      { id: 7, name: '디저트/쿠키' },
      { id: 8, name: '잼/양념/소스' },
      { id: 9, name: '음료' },
    ],
  },
  {
    id: 20,
    name: '레저용품',
    detail: [
      { id: 1, name: '가방' },
      { id: 2, name: '게임/레저용품' },
      { id: 3, name: '종이제품' },
      { id: 4, name: '도서' },
    ],
  },
  {
    id: 21,
    name: '반려동물',

    detail: [
      { id: 1, name: '고양이' },
      { id: 2, name: '강아지' },
    ],
  },
  {
    id: 22,
    name: '여름용 소품',
    detail: [
      { id: 1, name: '여름 장식/데코' },
      { id: 2, name: '여름 조명' },
      { id: 3, name: '여름 텍스타일' },
      { id: 4, name: '여름 시즌푸드' },
      { id: 5, name: '여름 파티' },
      { id: 6, name: '정원/가드닝' },
      { id: 7, name: '바비큐' },
    ],
  },
  {
    id: 23,
    name: '겨울용 소품',
    detail: [
      { id: 1, name: '겨울 장식/데코' },
      { id: 2, name: '겨울 조명' },
      { id: 3, name: '겨울 텍스타일' },
      { id: 4, name: '겨울 테이블웨어' },
      { id: 5, name: '겨울 화분/식물' },
      { id: 6, name: '겨울 요리/제빵도구' },
      { id: 7, name: '겨울 시즌푸드' },
      { id: 8, name: '포장지/쇼핑백' },
    ],
  },
];
function DetailNav({ data, active }) {
  return (
    <DetailNavBox active={active}>
      <h1>{data && data.name}</h1>
      <h2>전체보기</h2>
      <ul>{data && data.detail.map((v) => <li>{v.name}</li>)}</ul>
    </DetailNavBox>
  );
}
function NavItem({ data, setNavNumber, navNumber }) {
  return (
    <li onClick={() => setNavNumber(data.id)}>
      <span>{data.name}</span>
      {navNumber === data.id && (
        <i>
          <RiArrowRightSLine />
        </i>
      )}
    </li>
  );
}
export default function ProductNav({ onToggleNav }) {
  const [navNumber, setNavNumber] = useState(0);
  return (
    <>
      <NavContentBox>
        <i>
          <RiArrowLeftLine onClick={() => onToggleNav(0)} />
        </i>
        <ProductNavBox>
          <h1>모든 제품</h1>
          <h2>지속가능한 제품</h2>
          <ul>
            {navData.map((v) => (
              <NavItem
                key={v.id}
                data={v}
                setNavNumber={setNavNumber}
                navNumber={navNumber}
              />
            ))}
          </ul>
        </ProductNavBox>
      </NavContentBox>
      <DetailNav
        data={navData.find((v) => v.id === navNumber)}
        active={navNumber !== 0}
      />
    </>
  );
}
