import PaymentBottomBtn from 'components/common/PaymentBottomBtn';
import CartCalculator from 'components/cart/CartCalculator';
import CartInfo from 'components/cart/CartInfo';
import { ListHead, PageLayout } from 'components/common/CommonComponents';
import React from 'react';
import styled from 'styled-components';

const CartPageListHead = styled(ListHead)`
  border: none;
`;

function CartPage() {
  return (
    <PageLayout>
      <CartPageListHead>장바구니</CartPageListHead>
      <CartInfo />
      <CartCalculator />
      <PaymentBottomBtn />
    </PageLayout>
  );
}

export default CartPage;
