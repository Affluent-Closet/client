import { Inner } from 'components/common/CommonComponents';
import React from 'react';
import styled from 'styled-components';
import OrderInfoGoods from './OrderInfoGoods';

const OrderInfoSection = styled.section`
  margin: 0 auto;
  margin-top: 20px;
`;

function OrderInfo() {
  return (
    <OrderInfoSection>
      <h3>상품정보</h3>
      <Inner>
        <OrderInfoGoods />
        <OrderInfoGoods />
      </Inner>
    </OrderInfoSection>
  );
}

export default OrderInfo;
