import { Inner } from 'components/common/CommonComponents';
import React from 'react';
import styled from 'styled-components';
import CartInfoGoods from './CartInfoGoods';

const CartInfoSection = styled.section`
  margin: 0 auto;
  margin-top: 20px;
`;

function CartInfo() {
  return (
    <CartInfoSection>
      <Inner>
        <CartInfoGoods />
        <CartInfoGoods />
      </Inner>
    </CartInfoSection>
  );
}

export default CartInfo;
