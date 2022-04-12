/* eslint-disable react/destructuring-assignment */
import { palette } from 'libs/styles/palette';
import { GoodsProps } from 'model/goods';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';

const ItemContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  font-size: 16px;
  text-align: left;
  .won {
    font-weight: normal;
    font-size: 14px;
    margin-left: 2px;
  }
  .price {
    font-weight: 500;
  }
`;
const ItemImage = styled.img`
  width: 160px;
  height: 200px;
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    transform: scale(1.12);
    transition: 0.4s;
  }
`;
const ItemCategory = styled.div`
  color: ${palette.ListItemCategory};
  font-size: 10px;
`;
const ItemEle = styled.div`
  font-size: 14px;
  line-height: 1.5;
  margin: 1px 0;
  font-weight: unset;
  color: #2c2c2c;
`;

function GridGoodsItem(item: GoodsProps) {
  const { id, category, name, price, thumbnail } = item.item;
  return (
    <ItemContainer>
      <Link to={`${Path.GoodsPath}/${id}`}>
        <ItemImage src={thumbnail} />
        <ItemCategory>{category}</ItemCategory>
        <ItemEle>{name}</ItemEle>
        <div className="price">
          {price.toLocaleString('ko-KR')}
          <span className="won">원</span>
        </div>
      </Link>
    </ItemContainer>
  );
}

export default GridGoodsItem;
