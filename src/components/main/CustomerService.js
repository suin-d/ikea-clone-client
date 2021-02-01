import React from 'react';
import styled from 'styled-components';
import { GrDeliver } from 'react-icons/gr';
import { IoBuildOutline } from 'react-icons/io5';
import { BiBuildings } from 'react-icons/bi';
import CsItem from './CsItem';

const CsBox = styled.div`
  display: flex;
  gap: 1px;
  margin-top: 65px;
`;

const csItems = [
  {
    id: 0,
    icon: <GrDeliver />,
    title: '배송 서비스',
    text: '편리한 배송 옵션을 살펴보세요.',
  },
  {
    id: 1,
    icon: <IoBuildOutline />,
    title: '조립 서비스',
    text: 'IKEA에게 조립을 맡기고 소중한 시간을 아끼세요.',
  },
  {
    id: 2,
    icon: <BiBuildings />,
    title: '매장 픽업 서비스',
    text: '온라인에서 주문하고 원하시는 매장에서 바로 픽업하세요.',
  },
];
export default function CustomerService() {
  return (
    <CsBox>
      {csItems.map((item) => (
        <CsItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
    </CsBox>
  );
}
