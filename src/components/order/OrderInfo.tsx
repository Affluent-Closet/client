import { OrderPageWrapper } from 'components/common/CommonComponents';
import { mediaMin } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';
import OrderInfoCal from './OrderInfoCal';
import OrderInfoGoods from './OrderInfoGoods';

const OrderInfoSection = styled.section`
  font-size: 4px;
  margin: 0 auto;
  margin-top: 20px;
  ${mediaMin.large} {
    font-size: 14px;
  }
`;

const OrderInfoColumnList = styled.div`
  display: flex;
  line-height: 30px;
  border-bottom: 1px solid ${palette.border};
  text-align: center;

  span:nth-child(1) {
    flex-grow: 2;
  }
  span:nth-child(2) {
    flex-grow: 2;
  }
  span:nth-child(3) {
    flex-grow: 1;
  }
  span:nth-child(4) {
    flex-grow: 1;
  }
  span:nth-child(5) {
    flex-grow: 1;
  }
`;

function OrderInfo() {
  return (
    <OrderInfoSection>
      <h3>상품정보</h3>
      <OrderPageWrapper>
        <OrderInfoColumnList>
          {/* map 쓸지 고민 */}
          <span>이미지</span>
          <span>상품정보</span>
          <span>판매가</span>
          <span>수량</span>
          <span>합계</span>
        </OrderInfoColumnList>
        <OrderInfoGoods />
        <OrderInfoGoods />
        <OrderInfoCal />
      </OrderPageWrapper>
    </OrderInfoSection>
  );
}

export default OrderInfo;
