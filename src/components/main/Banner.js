import React from 'react';
import styled from 'styled-components';
import ButtonRound from '../common/buttons/ButtonRound';

const BannerBox = styled.div`
  width: 100%;
  display: flex;
  img {
    width: 67%;
    height: auto;
  }
  div {
    flex: 1;
    padding: 50px 45px;
    background: #f7ae2e;
    h1 {
      color: #ffffff;
      font-size: 25px;
      font-weight: 700;
      line-height: 35px;
      margin-bottom: 13px;
    }
    p {
      color: #ffffff;
      font-size: 14px;
      line-height: 1.5;
      word-break: keep-all;
      margin-bottom: 30px;
    }
  }
`;

export default function Banner() {
  return (
    <BannerBox>
      <img
        src="https://www.ikea.com/images/6a/c2/6ac2eebf956c58a95684559a7b49d74b.jpg?f=xxl"
        alt="banner"
      />
      <div>
        <h1>모바일 쇼핑을 더 편리하게, IKEA 앱 출시!</h1>
        <p>
          원하는 제품을 앱에서 바로 결제할 수 있고, 내 취향에 맞춘 인테리어
          사진과 홈퍼니싱 팀을 추천받을 수 있어요. IKEA Family 멤버라면 처음
          한번만 로그인하면 다양한 IKEA Family 혜택도 누릴 수 있고, 계산대
          앞에서 쉽게 카드를 확인할 수도 있어요!
        </p>
        <ButtonRound white>자세히 보기</ButtonRound>
      </div>
    </BannerBox>
  );
}
