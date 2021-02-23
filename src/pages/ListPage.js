import React, { useEffect, useState, useRef } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { getList, loadMoreList } from '../modules/product/thunk';
import List from '../components/list/List';
import ButtonFix from '../components/common/buttons/ButtonFix';
import Loading from '../components/common/Loading';

export default function ListPage({ location, match }) {
  const currentOffset = useRef(24);
  const beforeId = useRef(0);
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [currentFilter, setCurrentFilter] = useState(0);
  const { getListLoading, getListData, getListError, hasMore } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const { id } = match.params;
  const onLoadMore = () => {
    dispatch(
      loadMoreList({
        cateId: id,
        offset: currentOffset.current,
        filter: currentFilter,
      })
    );
    currentOffset.current += 24;
  };
  useEffect(() => {
    document.title = `IKEA | ${query.sc}`;
    if (id !== beforeId.current) {
      setCurrentFilter(0);
    }
    dispatch(getList({ cateId: id, filter: currentFilter }));
    beforeId.current = id;
  }, [dispatch, id, currentFilter, query.sc]);

  if (getListLoading) return <Loading />;
  if (!getListData) return null;
  if (getListError) return <div>에러페이지</div>;

  return (
    <>
      <List
        title={query.sc}
        data={getListData}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        onLoadMore={onLoadMore}
        hasMoreList={hasMore}
      />
      <ButtonFix />
    </>
  );
}
