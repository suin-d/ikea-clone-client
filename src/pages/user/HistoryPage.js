import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonRound from '../../components/common/buttons/ButtonRound';
import History from '../../components/user/history/History';
import useCheckLogin from '../../hooks/useCheckLogin';

const HistoryLayout = styled.div`
  letter-spacing: 1.2px;
  section {
    width: 100%;
    padding: 40px 0 50px 0;
    border-bottom: 2px solid #dfdfdf;
  }
  h1 {
    font-weight: bold;
    font-size: 35px;
    margin: 30px 0 40px 0;
  }
  section:nth-child(2) {
    display: flex;
  }
  article {
    flex: 1;
    h2 {
      font-weight: bold;
      font-size: 25px;
      margin-bottom: 20px;
    }
    & > p {
      margin-bottom: 20px;
      line-height: 1.3;
    }
  }
`;
export default function HistoryPage() {
  const userInfo = useCheckLogin();
  const [historyOpen, setHistoryOpen] = useState(false);
  return (
    <HistoryLayout>
      <section>
        <h1>배송조회 및 관리</h1>
        <p>
          주문한 제품이 지금 어디에 있는지 알고 싶으신가요? 아니면 주문 내용에
          변경하고 싶은 부분이 있나요? 걱정하지 마세요. IKEA의 추적 및 관리
          서비스가 도와드릴 수 있어요.
        </p>
      </section>
      <section>
        <article>
          <h2>배송조회</h2>
          <p>
            구입한 제품이 지금 어디에 있는지 정확히 알고 싶으신가요?
            <br />
            주문을 추적하면 걱정을 덜 수 있을 거예요.
          </p>
          <ButtonRound black>준비중인 서비스</ButtonRound>
        </article>
        <article>
          <h2>주문관리</h2>
          <p>
            트럭 배송 시간을 변경해야 하거나, 주문 취소 또는 조립 서비스가
            필요하다면 여기에서 도와드릴게요.
            <br />
            2021년 1월1일 주문 건부터 제품 출고 이후 배송취소 요청시에는
            운반비를 포함한 반품비 29,000원이 부과됩니다.
            <br />
            (배송비에서 반품비 29000원 차감 후 환불됩니다.)
          </p>
          <ButtonRound black onClick={() => setHistoryOpen(true)}>
            구매내역
          </ButtonRound>
        </article>
      </section>
      {historyOpen && (
        <History close={() => setHistoryOpen(false)} userInfo={userInfo} />
      )}
    </HistoryLayout>
  );
}
