import React from 'react';
import styled from 'styled-components';

export const ContentSection = styled.section`
  border: 2px solid #eee;
  border-radius: 4px;
  width: 100%;
  padding: 40px 100px;
  margin-bottom: 10px;
  h1 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
`;
const PayInfoContainer = styled(ContentSection)`
  ul {
    li {
      width: 100%;
      height: 130px;
      display: flex;
      align-items: center;
      div {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        img {
          max-width: 90%;
          max-height: 90%;
        }
      }
      article {
        flex: 1;
        line-height: 1.3;
        h3 {
          font-weight: bold;
        }
        p {
        }
      }
    }
  }
`;
function PayItem({ data }) {
  return (
    <li>
      <div>
        <img
          srcSet={data.ProdImages[0].srcSet}
          src={data.ProdImages[0].src}
          sizes={data.ProdImages[0].sizes}
          alt={data.ProdImages[0].info}
        />
      </div>
      <article>
        <h3>{data.title}</h3>
        <p>{data.summary}</p>
        <p>{`₩ ${data.slCost.toLocaleString()}`}</p>
        <p>{data.id}</p>
      </article>
    </li>
  );
}

const Summary = styled.article`
  h2 {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  p {
    display: flex;
    span:first-child {
      width: 100%;
    }
    span {
      font-size: 14px;
    }
  }
  hr {
    height: 3px;
    width: 100%;
    background: #000;
    margin: 20px 0 15px 0;
  }
  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    strong {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export default function PayInfo({ data, total }) {
  return (
    <PayInfoContainer>
      <h1>주문정보</h1>
      <ul>
        {data.map((v) => (
          <PayItem key={v.id} data={v} />
        ))}
      </ul>
      <Summary>
        <h2>주문내역</h2>
        <p>
          <span>전체 서비스비용</span>
          <span>
            이 금액에는 배송비가 포함되어 있지 않으며, 배송지에 따라 구매가
            불가할 수 있습니다
          </span>
        </p>
        <hr />
        <article>
          <h2>총 주문금액</h2>
          <strong>{`₩ ${total.toLocaleString()}`}</strong>
        </article>
      </Summary>
    </PayInfoContainer>
  );
}
