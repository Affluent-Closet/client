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
  font-size: 18px;
  text-align: left;
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
  font-size: 16px;
  line-height: 1.5;
`;

function GridGoodsItem(item: GoodsProps) {
  const { id, category, name, price, thumbnail } = item.item;
  return (
    <ItemContainer>
      <Link to={`${Path.GoodsPath}/${id}`}>
        <ItemImage src={thumbnail} />
        <ItemCategory>{category}</ItemCategory>
        <ItemEle>{name}</ItemEle>
        <b>{price.toLocaleString('ko-KR')}</b>
      </Link>
    </ItemContainer>
  );
}

export default GridGoodsItem;
