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

function GoodsPriceBox() {
  return (
    <>
      <GoodsTitleStyled>데이브레이크 운동화</GoodsTitleStyled>
      <GoodsPriceStyled>
        <div className="discount-price">104,000</div>
        <div className="original-price">130,000</div>
        <div className="discount-rate">20%</div>
      </GoodsPriceStyled>
    </>
  );
}

export default GoodsPriceBox;
