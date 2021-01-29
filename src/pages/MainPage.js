import React from 'react';
import ButtonCart from '../components/common/buttons/ButtonCart';
import ButtonFix from '../components/common/buttons/ButtonFix';
import ButtonRound from '../components/common/buttons/ButtonRound';
import InputSimple from '../components/common/inputs/InputSimple';

export default function MainPage() {
  return (
    <div>
      <ButtonRound>버튼</ButtonRound>
      <ButtonRound white>흰색버튼</ButtonRound>
      <ButtonRound gray>회색버튼</ButtonRound>
      <ButtonRound black>검은색버튼</ButtonRound>
      <InputSimple label="경고모드" type="text" warn />
      <InputSimple label="일반모드" type="password" />
      <ButtonCart />
      <ButtonFix />
    </div>
  );
}
