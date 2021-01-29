import React from 'react';
import { RiMenuLine } from 'react-icons/ri';
import styled from 'styled-components';

const MenuSection = styled.aside`
  width: 100px;
`;

export default function MenuBtn() {
  return <RiMenuLine />;
}
