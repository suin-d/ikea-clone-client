import React from 'react';
import qs from 'qs';
import data from '../mocks/productData';
import List from '../components/list/List';

export default function ListPage({ location }) {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <>
      {/* 네비들어갈 자리 */}
      <List title={query.sc} data={data} />
    </>
  );
}
