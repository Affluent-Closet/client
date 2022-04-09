import { Inner } from 'components/common/CommonComponents';
import React from 'react';
import styled from 'styled-components';

const TotalPayments = styled.dl`
  padding-top: 18px;

  dt {
    float: left;
    font-size: 13px;
    font-weight: 500;
    span {
      color: #ff5400 !important;
    }
  }
  dd {
    font-size: 25px;
    font-family: Lato;
    font-weight: 600;
    padding-left: 143px;
    text-align: right;
    line-height: 1;
  }
`;

function CartCalculator() {
  return (
    <Inner>
      <TotalPayments>
        <dt>
          총 결제 금액
          <span> (총 2개 상품)</span>
        </dt>
        <dd>2,222,222원</dd>
      </TotalPayments>
    </Inner>
  );
}

export default CartCalculator;
