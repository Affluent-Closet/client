import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const OrderInfoCalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 0;
  border-bottom: 1px solid ${palette.grayDark};
  span {
    margin-right: 4px;
  }
`;

const OrderInfoCalPirce = styled.span`
  font-weight: bold;
`;

const OrderInfoCalTotal = styled.span`
  font-weight: bold;
  span {
    color: ${palette.mainColor};
  }
`;

function OrderInfoCal() {
  return (
    <OrderInfoCalContainer>
      <span>상품 구매 금액</span>
      <OrderInfoCalPirce>551,670</OrderInfoCalPirce>
      <span>+ 배송비</span>
      <OrderInfoCalPirce>3,000 =</OrderInfoCalPirce>
      <OrderInfoCalTotal>
        합계
        <span> 554,670</span>원
      </OrderInfoCalTotal>
    </OrderInfoCalContainer>
  );
}

export default OrderInfoCal;
