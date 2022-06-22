import { ListHead, PageLayout } from 'components/common/CommonComponents';
import OrderItemsSection from 'components/myOrder/OrderItemsSection';
import OrderSummery from 'components/myOrder/OrderSummery';
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
      <OrderItemsSection />
    </PageLayout>
  );
}

export default MyOrderPage;
