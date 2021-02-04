import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import ButtonBig from '../../common/buttons/ButtonBig';
import ModalLayout from '../../common/modal/ModalLayout';
import useInterval from '../../../hooks/useInterval';

const AuthEmailContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  h2 {
    padding: 10px 0;
    font-size: 16px;
    color: #111;
  }
  & > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 50px;
    input {
      width: 18%;
      height: 80px;
      border: none;
      border-bottom: 2px solid #111;
      padding: 0 25px;
      font-size: 40px;
      font-weight: bold;
    }
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
function AuthEmail({ email, close, history }) {
  const [count, setCount] = useState(100);
  const [first, onChangeFirst] = useInput('');
  const [second, onChangeSecond] = useInput('');
  const [third, onChangeThird] = useInput('');
  const [fourth, onChangeFourth] = useInput('');
  const goHome = () => {
    close();
    history.replace('/');
  };
  useInterval(() => {
    setCount(count - 1);
  }, 1000);
  const onAddCount = () => {
    if (count < 100) {
      setCount(count + 300);
    } else {
      // eslint-disable-next-line no-alert
      alert('100초 이하일 경우 가능합니다.');
    }
  };
  return (
    <ModalLayout title="이메일확인" close={goHome}>
      <AuthEmailContainer>
        <h2>{`${email}로 인증번호를 보냈습니다.`}</h2>
        <div>
          <input type="number" value={first} onChange={onChangeFirst} max={9} />
          <input
            type="number"
            value={second}
            onChange={onChangeSecond}
            max={9}
          />
          <input type="number" value={third} onChange={onChangeThird} max={9} />
          <input
            type="number"
            value={fourth}
            onChange={onChangeFourth}
            max={9}
          />
        </div>
        <ButtonBig>{`인증 - ${count}초 남았습니다.`}</ButtonBig>
        <ButtonBig gray onClick={onAddCount}>
          5분 연장
        </ButtonBig>
      </AuthEmailContainer>
    </ModalLayout>
  );
}
export default withRouter(AuthEmail);
