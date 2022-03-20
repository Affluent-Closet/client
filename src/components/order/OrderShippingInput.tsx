import { OrderPageWrapper } from 'components/common/CommonComponents';
import React from 'react';
import styled from 'styled-components';

const OrderShippingInputSection = styled.section``;

function OrderShippingInfo() {
  return (
    <OrderShippingInputSection>
      <h3>주문/배송 정보</h3>
      <OrderPageWrapper>
        <div>
          <span>test</span>
        </div>
      </OrderPageWrapper>
    </OrderShippingInputSection>
  );
}

export default OrderShippingInfo;
