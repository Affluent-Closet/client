import { mediaMax } from 'libs/styles/media';
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
  ${mediaMax.large} {
    text-align: left;
  }
`;

interface GoodsPriceProps {
  price: number;
  discount: number;
  goodsName: string;
  discountPriceIndex: number;
}
function GoodsPriceBox({
  price,
  discount,
  goodsName,
  discountPriceIndex,
}: GoodsPriceProps) {
  return (
    <>
      <GoodsTitleStyled>{goodsName}</GoodsTitleStyled>
      <GoodsPriceStyled>
        <div className="discount-price">{discountPriceIndex}</div>
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
