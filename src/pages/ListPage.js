import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../modules/product/thunk';
import List from '../components/list/List';

export default function ListPage({ location, match }) {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const { getListLoading, getListData, getListError } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const { id } = match.params;

  useEffect(() => {
    dispatch(getList(id));
  }, [dispatch, id]);

  if (getListLoading) return <div>상품을 로딩중입니다.</div>;
  if (!getListData) return null;
  if (getListError) return <div>에러페이지</div>;

  return (
    <>
      {/* 네비들어갈 자리 */}
      <List title={query.sc} data={getListData} />
    </>
  );
}
