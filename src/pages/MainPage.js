import React from 'react';
import ButtonCart from '../components/common/buttons/ButtonCart';
import ButtonFix from '../components/common/buttons/ButtonFix';
import ButtonNext from '../components/common/buttons/ButtonNext';
import ButtonRound from '../components/common/buttons/ButtonRound';
import Promo from '../components/main/Promo';

export default function MainPage() {
  return (
    <div>
      <ButtonRound>버튼</ButtonRound>
      <ButtonRound white>흰색버튼</ButtonRound>
      <ButtonRound gray>회색버튼</ButtonRound>
      <ButtonRound black>검은색버튼</ButtonRound>
      <ButtonCart />
      <ButtonFix />
      <ButtonNext />
      <Promo />
    </div>
  );
}
