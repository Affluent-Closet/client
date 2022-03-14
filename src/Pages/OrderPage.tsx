import { ListHead } from 'components/common/CommonComponents';
import OrderInfo from 'components/order/OrderInfo';
import React from 'react';

function OrderPage() {
  return (
    <>
      <ListHead>주문 정보</ListHead>
      <OrderInfo />
    </>
  );
}

export default OrderPage;
