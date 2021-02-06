import React from 'react';
import useCheckLogin from '../../hooks/useCheckLogin';

export default function MyPage() {
  const userInfo = useCheckLogin();
  if (!userInfo) return null;
  return (
    <div>
      <div>{userInfo.email}</div>
    </div>
  );
}
