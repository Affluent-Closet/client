import { OrderInner } from 'components/common/CommonComponents';
import React from 'react';
import styled from 'styled-components';
import CartInfoGoods from './CartInfoGoods';

const CartInfoSection = styled.section`
  margin: 0 auto;
  margin-top: 20px;
`;

const CartInfoColumnList = styled.ol``;

function CartInfo() {
  return (
    <CartInfoSection>
      <OrderInner>
        <CartInfoGoods />
        <CartInfoGoods />
      </OrderInner>
    </CartInfoSection>
  );
}

export default CartInfo;
