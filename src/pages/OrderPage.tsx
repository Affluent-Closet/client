import { ListHead, PageContainer } from 'components/common/CommonComponents';
import OrderInfo from 'components/order/OrderInfo';
import OrderShippingInput from 'components/order/OrderShippingInput';
import React from 'react';
import styled from 'styled-components';

const OrderPageListHead = styled(ListHead)`
  border: none;
`;

function OrderPage() {
  return (
    <>
      <OrderPageListHead>주문 정보</OrderPageListHead>
      <OrderInfo />
      <OrderShippingInput />
    </>
  );
}

export default OrderPage;
