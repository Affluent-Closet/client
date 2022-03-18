import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const OrderInfoGoodsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${palette.border};
  height: 92px;

  div:nth-child(1) {
    flex-grow: 2;
  }
  div:nth-child(2) {
    flex-grow: 2;
  }
  div:nth-child(3) {
    flex-grow: 1;
  }
  div:nth-child(4) {
    flex-grow: 1;
  }
  div:nth-child(5) {
    flex-grow: 1;
  }
`;
// const OrderInfoGoodsInner = styled.div``;
const OrderInfoGoodsImg = styled.div``;
const OrderInfoGoodsImgTemp = styled.div`
  width: 56px;
  height: 72px;
  background-color: ${palette.temp};
  margin: 0 auto;
`;
const OrderInfoGoodsDetail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  color: ${palette.grayDark};
  line-height: 1.3;

  span {
    width: 80%;
    margin: 0 auto;
  }

  span:nth-child(2) {
    color: black;
    font-weight: bold;
  }
`;
const OrderInfoGoodsPrice = styled.div``;
const OrderInfoGoodsNum = styled.div``;
const OrderInfoGoodsTotal = styled.div``;

function OrderInfoGoods() {
  return (
    <OrderInfoGoodsContainer>
      <OrderInfoGoodsImg>
        <OrderInfoGoodsImgTemp />
      </OrderInfoGoodsImg>
      <OrderInfoGoodsDetail>
        <span>도프제이슨</span>
        <span>프리미엄 가죽 자켓</span>
        <span>옵션 : L</span>
      </OrderInfoGoodsDetail>
      <OrderInfoGoodsPrice>199000원</OrderInfoGoodsPrice>
      <OrderInfoGoodsNum>1개</OrderInfoGoodsNum>
      <OrderInfoGoodsTotal>199000원</OrderInfoGoodsTotal>
    </OrderInfoGoodsContainer>
  );
}

export default OrderInfoGoods;
