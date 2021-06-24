import React from 'react';
import SpaceShip from 'assets/img/spaceship.svg';
import { LoadingContainer } from './Loading';

export default function Error({ text = '', ...rest }) {
  return (
    <LoadingContainer {...rest}>
      <img src={SpaceShip} alt=".." />
      <p>{text}</p>
    </LoadingContainer>
  );
}
