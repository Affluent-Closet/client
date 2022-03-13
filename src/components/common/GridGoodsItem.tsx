import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  font-size: 18px;
`;
const ItemImage = styled.div`
  width: 160px;
  height: 200px;
  background-color: ${palette.temp};
`;
const ItemCategory = styled.span`
  color: ${palette.ListItemCategory};
  font-size: 10px;
  margin-top: 20px;
`;
const ItemEle = styled.div`
  line-height: 1.5;
`;

function GridGoodsItem() {
  return (
    <ItemContainer>
      <ItemImage />
      <ItemCategory>Premium denim</ItemCategory>
      <ItemEle>스트레이트핏 데님</ItemEle>
      <div>98,000원</div>
    </ItemContainer>
  );
}

export default GridGoodsItem;
