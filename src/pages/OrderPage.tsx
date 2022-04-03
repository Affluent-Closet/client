import { ListHead, PageLayout } from 'components/common/CommonComponents';
import OrderInfo from 'components/order/OrderInfo';
import OrderShippingInfo from 'components/order/OrderShippingInfo';
import React from 'react';
import styled from 'styled-components';

const OrderPageListHead = styled(ListHead)`
  border: none;
`;

function OrderPage() {
  return (
    <PageLayout>
      <OrderPageListHead>주문 정보</OrderPageListHead>
      <OrderInfo />
      <OrderShippingInfo />
    </PageLayout>
  );
}

export default OrderPage;
