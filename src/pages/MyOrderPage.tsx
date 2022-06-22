import { ListHead, PageLayout } from 'components/common/CommonComponents';
import OrderSummery from 'components/myOrder/OrderSummery';
import OrderInfo from 'components/order/OrderInfo';
import OrderShippingInfo from 'components/order/OrderShippingInfo';
import React from 'react';
import styled from 'styled-components';

const OrderListHead = styled(ListHead)`
  border: none;
`;

function MyOrderPage() {
  return (
    <PageLayout>
      <OrderListHead>주문내역 조회</OrderListHead>
      <OrderSummery />
      <OrderInfo />
    </PageLayout>
  );
}

export default MyOrderPage;
