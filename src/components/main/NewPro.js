import React from 'react';
import styled from 'styled-components';
import ButtonRound from '../common/buttons/ButtonRound';
import NewProItem from './NewProItem';

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
  margin-bottom: 32px;
  h1 {
    font-size: 25px;
    font-weight: 700;
  }
`;

const ItemBox = styled.div`
  display: flex;
  gap: 20px;
`;

const proItem = [
  {
    id: 0,
    src:
      'https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=s',
    srcset:
      'https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=xxxs 240w, https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=xxs 300w, https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=xs 400w, https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=s 500w, https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=m 600w, https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=l 750w, https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=xl 800w, https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=xxl 950w, https://www.ikea.com/ext/ingkadam/m/221e6c380fb9196/original/PH155438-crop001.jpg?f=xxxl 1400w',
    sizes:
      '(min-width: 1824px) 508.333px,\n        (min-width: 1200px) calc(((100vw - (2.8125rem + 3.125rem)) - (((100vw - (2.8125rem + 3.125rem)) / 13) + 1.25rem))/3 - (1.25rem / 2)),\n        (min-width: 900px) calc(33.333vw - ((1.25rem * 2) / 3) - ((3.125rem * 2) / 3)),\n        (min-width: 600px) calc((100vw - 3.75rem - (0.9375rem * 2)) / 3),\n        calc(50vw - 2.5rem + (0.625rem))',
    link:
      'https://www.ikea.com/kr/ko/p/vardagen-teacup-with-saucer-off-white-50288315/',
    fullId: 'vardagen-teacup-with-saucer-off-white-50288315',
    shortId: '50288315',
    categoryId: 1,
    cateName: '거실',
  },
  {
    id: 1,
    src:
      'https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=s',
    srcset:
      'https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=xxxs 240w, https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=xxs 300w, https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=xs 400w, https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=s 500w, https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=m 600w, https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=l 750w, https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=xl 800w, https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=xxl 950w, https://www.ikea.com/ext/ingkadam/m/44806655dc263e9/original/PE575335-crop001.jpg?f=xxxl 1400w',
    sizes:
      '(min-width: 1824px) 508.333px,\n        (min-width: 1200px) calc(((100vw - (2.8125rem + 3.125rem)) - (((100vw - (2.8125rem + 3.125rem)) / 13) + 1.25rem))/3 - (1.25rem / 2)),\n        (min-width: 900px) calc(33.333vw - ((1.25rem * 2) / 3) - ((3.125rem * 2) / 3)),\n        (min-width: 600px) calc((100vw - 3.75rem - (0.9375rem * 2)) / 3),\n        calc(50vw - 2.5rem + (0.625rem))',
    link: 'https://www.ikea.com/kr/ko/p/branaes-basket-white-20393412/',
    fullId: 'branaes-basket-white-20393412',
    shortId: '20393412',
    categoryId: 1,
    cateName: '거실',
  },
];

export default function NewPro() {
  return (
    <>
      <TitleBox>
        <h1>신제품을 만나보세요</h1>
        <ButtonRound>신제품 보러가기</ButtonRound>
      </TitleBox>
      <ItemBox>
        {proItem.map((pro) => (
          <NewProItem
            key={pro.id}
            src={pro.src}
            srcset={pro.srcset}
            sizes={pro.sizes}
            link={pro.link}
            fullId={pro.fullId}
            shortId={pro.shortId}
            categoryId={pro.categoryId}
            cateName={pro.cateName}
          />
        ))}
      </ItemBox>
    </>
  );
}
