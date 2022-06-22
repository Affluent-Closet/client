import { Inner } from 'components/common/CommonComponents';
import React from 'react';
import styled from 'styled-components';
import MyOrderListBox from './MyOrderListBox';

const OrderItems = styled.section`
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: 20px;
`;

const ItemsInfoTit = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-left: 20px;
`;
function OrderItemsSection() {
  return (
    <OrderItems>
      {/* 이 빈 꺽쇠 기준으로 map 돌리면됨 */}
      <>
        <ItemsInfoTit>2022.01.11</ItemsInfoTit>
        <Inner>
          <MyOrderListBox />
        </Inner>
      </>
      <>
        <ItemsInfoTit>2022.01.11</ItemsInfoTit>
        <Inner>
          <MyOrderListBox />
        </Inner>
      </>
    </OrderItems>
  );
}

export default OrderItemsSection;
