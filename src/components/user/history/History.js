import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import ModalLayout from '../../common/modal/ModalLayout';
import { getHistory } from '../../../modules/user/thunk';
import 'dayjs/locale/ko';

dayjs.locale('ko');

const ItemBox = styled.li`
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid #eee;
  & > div {
    width: 130px;
    height: 130px;
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
      font-size: 14px;
    }
    p {
      display: block;
    }
    & > span {
      font-weight: bold;
      font-size: 16px;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 0 15px;
    & > div {
      width: 90px;
      height: 90px;
      margin-right: 15px;
    }
  }
`;
function HistoryListItem({ data }) {
  if (!data) return null;
  return (
    <ItemBox>
      <div>
        <img src={data.Product.ProdImages[0].src} alt={data.ProductId} />
      </div>
      <article>
        <h4>{data.Product.title}</h4>
        <p>
          <span>{data.Product.summary}</span>
          <span>
            수량:
            <strong>{`${data.quantity}개`}</strong>
          </span>
        </p>
        <span>
          {`금액: ₩ ${(data.Product.slCost * data.quantity).toLocaleString()}`}
        </span>
      </article>
    </ItemBox>
  );
}
const ListPakageConatiner = styled.li`
  max-width: 540px;
  margin: 0 auto;
  border-bottom: 2px solid #aaa;
  margin-bottom: 40px;
  padding-bottom: 20px;
  & > article {
    padding: 10px 30px;
    background-color: #eee;
    border-top: 2px solid #aaa;
    border-bottom: 2px solid #aaa;
    margin-bottom: 10px;
  }
  h3 {
    font-weight: bold;
    margin: 5px 0;
  }
  p {
    display: flex;
    justify-content: space-between;
  }
  p {
    flex: 1;
    text-align: end;
    span {
      font-size: 13px;
      display: block;
    }
    b {
      font-size: 18px;
    }
    strong {
      font-weight: bold;
    }
  }
  ul {
    background-color: #fefefe;
  }
  @media ${({ theme }) => theme.mobile} {
    article {
      width: 100%;
    }
  }
`;
function HistoryPakage({ data }) {
  if (!data) return null;
  return (
    <ListPakageConatiner>
      <article>
        <h3>{`주문번호:${data.paymentToken}`}</h3>
        <p>
          <span>
            {dayjs(data.createdAt)
              .locale('ko')
              .format('YYYY년 MMMM D일 HH시 mm분')}
          </span>
          <b>
            <small>총액: ₩</small>
            <strong>{parseInt(data.totalPrice, 10).toLocaleString()}</strong>
          </b>
        </p>
      </article>
      <ul>
        {data.Histories.map((v) => (
          <HistoryListItem data={v} key={v.id} />
        ))}
      </ul>
    </ListPakageConatiner>
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
      width: 100%;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    ul {
      max-height: 360px;
      flex: 1;
    }
    ul > li {
      margin: 0;
      & > article > p {
        flex-direction: column;
      }
    }
  }
`;
const getTotal = (data) =>
  data.reduce((acc, v) => parseInt(v.totalPrice, 10) + acc, 0);

export default function History({ close, userInfo }) {
  const { getHistoryData: data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const totalPrice = useMemo(() => data && getTotal(data), [data]);
  useEffect(() => {
    dispatch(getHistory(userInfo.email));
  }, [dispatch, userInfo]);
  if (!data) return null;
  return (
    <ModalLayout title="구매내역" close={close}>
      <HistoryList>
        <ul>
          {data.length !== 0
            ? data.map((v) => <HistoryPakage data={v} key={v.id} />)
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
