import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../../../modules/user/thunk';
import ButtonRound from '../../common/buttons/ButtonRound';
import { Gap } from '../signup/SignupForm';

export default function AcountSetting({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const onDeleteUser = () => {
    dispatch(deleteUser(userInfo.email));
    history.replace('/');
  };
  return (
    <li>
      <h5>
        <span>회원 정보 삭제</span>
      </h5>
      <article>
        <span>
          IKEA를 더 이상 이용하지 않는다면 언제든 탈퇴할 수 있습니다. 단, 회원
          정보 및 구매 내역이 함께 삭제된다는 점을 참고해주세요.
        </span>
        <Gap h="30px" />
        <ButtonRound black onClick={onDeleteUser}>
          계정삭제
        </ButtonRound>
      </article>
    </li>
  );
}
