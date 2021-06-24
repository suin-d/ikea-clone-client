import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addAlert } from '../modules/interface';

export default function useCheckLogin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user);

  useEffect(() => {
    if (!userInfo) {
      history.replace('/user/signin');
      dispatch(addAlert('로그인이 필요한 서비스입니다.'));
    }
  }, [userInfo, history, dispatch]);
  return userInfo;
}
