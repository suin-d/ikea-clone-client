import React from 'react';
import { LoadingContainer } from './Loading';
import SpaceShip from '../../assets/img/spaceship.svg';

export default function Error({ text = '', ...rest }) {
  return (
    <LoadingContainer {...rest}>
      <img src={SpaceShip} alt=".." />
      <p>{text}</p>
    </LoadingContainer>
  );
}
