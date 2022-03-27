import { OrderPageInner } from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';
import OrderInfoCal from './OrderInfoCal';
import OrderInfoGoods from './OrderInfoGoods';

const OrderInfoSection = styled.section`
  margin: 0 auto;
  margin-top: 20px;
`;

const OrderInfoColumnList = styled.ol`
  display: flex;
  line-height: 30px;
  border-bottom: 1px solid ${palette.border};
  text-align: center;

  li:nth-child(1) {
    flex-grow: 2;
  }
  li:nth-child(2) {
    flex-grow: 2;
  }
  li:nth-child(3) {
    flex-grow: 1;
  }
  li:nth-child(4) {
    flex-grow: 1;
  }
  li:nth-child(5) {
    flex-grow: 1;
  }
`;

function OrderInfo() {
  return (
    <OrderInfoSection>
      <h3>상품정보</h3>
      <OrderPageInner>
        <OrderInfoColumnList>
          {/* map 쓸지 고민 */}
          <li>이미지</li>
          <li>상품정보</li>
          <li>판매가</li>
          <li>수량</li>
          <li>합계</li>
        </OrderInfoColumnList>
        <OrderInfoGoods />
        <OrderInfoGoods />
        <OrderInfoCal />
      </OrderPageInner>
    </OrderInfoSection>
  );
}

export default OrderInfo;
