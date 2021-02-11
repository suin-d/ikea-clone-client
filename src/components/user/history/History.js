import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ModalLayout from '../../common/modal/ModalLayout';
import { getHistory } from '../../../modules/user/thunk';

const ItemBox = styled.li`
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid #eee;
  & > div {
    width: 150px;
    height: 150px;
    margin-right: 20px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  & > article {
    flex: 1;
    padding: 10px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h4 {
      font-weight: bold;
      font-size: 16px;
    }
    p {
      flex: 1;
      text-align: end;
      span {
        display: block;
      }
    }
    & > span {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
function HistoryListItem({ data }) {
  if (!data.Payment) return null;
  return (
    <ItemBox>
      <div>
        <img src={data.Product.ProdImages[0].src} alt={data.ProductId} />
      </div>
      <article>
        <h4>{data.Product.title}</h4>
        <p>
          <span>{data.Product.summary}</span>
          <span>{`주문번호:${data.Payment.paymentToken}`}</span>
        </p>
        <span>{`₩ ${data.Product.slCost.toLocaleString()}`}</span>
      </article>
    </ItemBox>
  );
}

const HistoryList = styled.div`
  width: 600px;
  & > article {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid #111;
    display: flex;
    justify-content: space-between;
    p {
      font-weight: bold;
      font-size: 14px;
    }
    span {
      font-weight: bold;
      font-size: 20px;
    }
  }
  & > ul {
    max-height: 500px;
    overflow-y: scroll;
    li:last-child {
      border: none;
    }
  }
`;
const getTotal = (data) => data.reduce((acc, c) => c.Product.slCost + acc, 0);

export default function History({ close, userInfo }) {
  const { getHistoryData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const totalPrice = useMemo(() => getHistoryData && getTotal(getHistoryData), [
    getHistoryData,
  ]);
  useEffect(() => {
    dispatch(getHistory(userInfo.email));
  }, [dispatch, userInfo]);
  console.log(getHistoryData);
  if (!getHistoryData) return null;
  return (
    <ModalLayout title="구매내역" close={close}>
      <HistoryList>
        <ul>
          {getHistoryData.length !== 0
            ? getHistoryData.map((v) => <HistoryListItem data={v} key={v.id} />)
            : '구매내역이 존재하지 않습니다.'}
        </ul>
        <article>
          <p>총 주문금액</p>
          <span>{`₩ ${totalPrice.toLocaleString()}`}</span>
        </article>
      </HistoryList>
    </ModalLayout>
  );
}
