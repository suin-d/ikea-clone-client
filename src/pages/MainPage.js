import React from 'react';
// import ButtonCart from '../components/common/buttons/ButtonCart';
// import ButtonFix from '../components/common/buttons/ButtonFix';
// import ButtonNext from '../components/common/buttons/ButtonNext';
// import ButtonRound from '../components/common/buttons/ButtonRound';
// import InputSimple from '../components/common/inputs/InputSimple';
import Carousel from '../components/common/Carousel';
import PromoItem, {
  promoMocks,
  promoSettings,
} from '../components/main/PromoItem';
import Banner from '../components/main/Banner';
import CustomerService from '../components/main/cs/CustomerService';
import NewPro from '../components/main/product/NewPro';
import News from '../components/main/news/News';
import Solution from '../components/main/solution/Solution';

const newsItems1 = [
  {
    id: 0,
    imgSrc:
      'https://www.ikea.com/images/10/f8/10f865a8dc41e5d0a6945581cd838848.jpg?f=m',
    name: '2021 카탈로그',
  },
  {
    id: 1,
    imgSrc:
      'https://www.ikea.com/images/ee/8d/ee8d08c5b72db802865f4f366ec2cf0f.jpg?f=xl',
    name: 'IKEA 푸드',
  },
];

const newsItems2 = [
  {
    id: 0,
    imgSrc:
      'https://www.ikea.com/images/19/fa/19fa59a25c68191571feac7e249a7110.jpg?f=xs',
    name: '제품리콜',
  },
  {
    id: 1,
    imgSrc:
      'https://www.ikea.com/images/15/06/15067ecbac52a280cfc31e2d2c3a25af.jpg?f=m',
    name: '안전사고 예방 방법',
  },
];
export default function MainPage() {
  return (
    <div>
      <Banner />
      <Carousel
        title="진행 중인 이벤트 및 프로모션"
        ItemComponent={PromoItem}
        data={promoMocks}
        setting={promoSettings}
      />
      <NewPro />
      <Solution />
      <News newsItems={newsItems1} />
      <CustomerService />
      <News newsItems={newsItems2} />
      {/* <ButtonRound>버튼</ButtonRound>
      <ButtonRound white>흰색버튼</ButtonRound>
      <ButtonRound gray>회색버튼</ButtonRound>
      <ButtonRound black>검은색버튼</ButtonRound>
      <InputSimple label="경고모드" type="text" warn />
      <InputSimple label="일반모드" type="password" />
      <ButtonCart />
      <ButtonFix />
      <ButtonNext /> */}
    </div>
  );
}
