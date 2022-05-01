import useDiscountCal from 'hooks/goods/useDiscountCal';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const GoodsPriceStyled = styled.div`
  display: flex;
  margin-bottom: 20px;
  .discount-price {
    font-size: 25px;
  }
  .original-price {
    margin: 5px;
    line-height: 15px;
    text-decoration: line-through;
    color: rgba(51, 51, 51, 0.5);
  }
  .discount-rate {
    font-size: 22px;
    color: ${palette.mainColor};
  }
`;

const GoodsTitleStyled = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

interface GoodsPriceProps {
  price: number;
  discount: number;
}
function GoodsPriceBox({ price, discount }: GoodsPriceProps) {
  const { discountPriceString } = useDiscountCal(price, discount);
  return (
    <>
      <GoodsTitleStyled>데이브레이크 운동화</GoodsTitleStyled>
      <GoodsPriceStyled>
        <div className="discount-price">{discountPriceString}</div>
        {discount !== 0 && (
          <>
            <div className="original-price">
              {price.toLocaleString('ko-KR')}
            </div>
            <div className="discount-rate">{discount}%</div>
          </>
        )}
      </GoodsPriceStyled>
    </>
  );
}

export default GoodsPriceBox;
