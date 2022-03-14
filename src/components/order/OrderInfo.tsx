import { mediaMin } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';
import OrderInfoGoods from './OrderInfoGoods';

const OrderInfoSection = styled.section`
  font-size: 4px;
  margin: 0 auto;
  margin-top: 20px;
  ${mediaMin.large} {
    max-width: 1024px;
  }
`;

const OrderInfoInner = styled.div`
  margin-top: 6px;
  border-top: 2px solid ${palette.mainColor};
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

const OrderInfoTotalPrice = styled.div``;

function OrderInfo() {
  return (
    <OrderInfoSection>
      <h3>상품정보</h3>
      <OrderInfoInner>
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
      </OrderInfoInner>
    </OrderInfoSection>
  );
}

export default OrderInfo;
