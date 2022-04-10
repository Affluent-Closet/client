/* eslint-disable jsx-a11y/alt-text */
import React, { MouseEvent } from 'react';
import {
  FlexCenter,
  ItemGrid,
  ListHead,
} from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import styled from 'styled-components';
import useGoodsEffect from 'hooks/goods/useGoodsEffect';
import { SortMethod } from 'model/enums';
import { IGoodsQuery } from 'model/goods';
import { GridGoodsItem, LoadingBox } from 'components/common';
import SearchTitle from './SearchKeyword';

const SearchListHead = styled(ListHead)`
  display: flex;
  justify-content: space-between;
  .search-keyword {
    color: ${palette.mainColor};
    text-transform: uppercase;
  }
`;

export const SortMenu = styled.input`
  padding: 0px 4px;
  border-right: 1px solid ${palette.temp};
  color: ${palette.temp};
  font-weight: 400;
  font-size: 14px;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    color: black;
    font-weight: 500;
    text-decoration: underline;
  }
`;

interface ResultItemsProps {
  qs: IGoodsQuery;
  isSearch: boolean;
  onClickSort: (e: MouseEvent<HTMLInputElement>) => void;
}
const sortMethods = [SortMethod.BEST, SortMethod.NEW, SortMethod.LOWPRICE];

function ResultItems({ isSearch, qs, onClickSort }: ResultItemsProps) {
  const { goodsData } = useGoodsEffect(qs);
  const { data: goods, isFetching } = goodsData;
  if (!goods) return null;
  if (isFetching) return <LoadingBox />;

  return (
    <>
      <SearchListHead>
        <SearchTitle
          isSearch={isSearch}
          searchKeyword={isSearch ? qs.name : qs.category}
        />
        <FlexCenter>
          {sortMethods.map((method) => (
            <SortMenu
              key={method}
              type="button"
              name="sortBy"
              onClick={onClickSort}
              value={method}
            />
          ))}
        </FlexCenter>
      </SearchListHead>
      <ItemGrid>
        {goods.items.map((good, index) => (
          <GridGoodsItem key={`good_${index}`} item={good} />
        ))}
      </ItemGrid>
    </>
  );
}

export default ResultItems;
