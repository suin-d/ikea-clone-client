import React from 'react';
import data from '../components/list/data';
import List from '../components/list/List';

export default function ListPage() {
  return (
    <>
      {/* 네비들어갈 자리 */}
      <List title="리모콘/무선장치" data={data} />
    </>
  );
}
