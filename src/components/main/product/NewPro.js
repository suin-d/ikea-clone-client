import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonDot from 'components/common/buttons/ButtonDot';
import ButtonRound from 'components/common/buttons/ButtonRound';
import { proItem } from 'mocks/newProduct';
import ProInfoBox from './ProInfoBox';

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
  margin-bottom: 32px;
  h1 {
    font-size: 25px;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 0 20px;
    align-items: center;
    h1 {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

const ItemsWrapper = styled.ul`
  display: flex;
  gap: 20px;
  @media ${({ theme }) => theme.mobile} {
    padding: 0 10px;
    align-items: center;
    gap: 10px;
  }
`;

const ItemBox = styled.li`
  position: relative;
  flex: 1;
  img {
    width: 100%;
    height: auto;
  }
`;
function NewProItem({ data }) {
  const [infoActive, setInfoActive] = useState(false);
  const onEnter = () => {
    setInfoActive(true);
  };
  const onLeave = () => {
    setInfoActive(false);
  };
  return (
    <ItemBox>
      <img
        srcSet={data.srcset}
        sizes={data.sizes}
        src={data.src}
        alt={data.fullId}
      />
      <ButtonDot
        position={{ top: '50%', left: '50%' }}
        active={infoActive}
        onEnter={onEnter}
      />
      <ProInfoBox data={data} active={infoActive} onLeave={onLeave} />
    </ItemBox>
  );
}

export default function NewPro() {
  return (
    <>
      <TitleBox>
        <h1>신제품을 만나보세요</h1>
        <ButtonRound>신제품 보러가기</ButtonRound>
      </TitleBox>
      <ItemsWrapper>
        {proItem.map(pro => (
          <NewProItem key={pro.id} data={pro} />
        ))}
      </ItemsWrapper>
    </>
  );
}
