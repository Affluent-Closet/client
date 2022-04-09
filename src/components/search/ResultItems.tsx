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
import GridGoodsItem from 'components/common/GridGoodsItem';
import { SortMethod } from 'model/enums';
import { IGoodsQuery } from 'model/goods';
import LoadingBox from 'components/common/LoadingBox';

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
  keyword: string | null | undefined;
  onClickSort: (e: MouseEvent<HTMLInputElement>) => void;
}
function ResultItems({ isSearch, keyword, qs, onClickSort }: ResultItemsProps) {
  const { goodsData } = useGoodsEffect(qs);
  const { data: goods, isLoading } = goodsData;
  return (
    <>
      <SearchListHead>
        {isSearch ? (
          <FlexCenter>
            <div className="search-keyword">{keyword}</div>에 대한 검색 결과
          </FlexCenter>
        ) : (
          <div className="search-keyword">{keyword}</div>
        )}
        <FlexCenter>
          <SortMenu
            type="button"
            onClick={onClickSort}
            name="sortBy"
            value={SortMethod.BEST}
          />
          <SortMenu
            type="button"
            name="sortBy"
            onClick={onClickSort}
            value={SortMethod.NEW}
          />
          <SortMenu
            type="button"
            name="sortBy"
            onClick={onClickSort}
            value={SortMethod.LOWPRICE}
          />
        </FlexCenter>
      </SearchListHead>
      {isLoading ? (
        <LoadingBox />
      ) : (
        <ItemGrid>
          {goods &&
            goods.items.map((good, index) => (
              <GridGoodsItem key={`good_${index}`} item={good} />
            ))}
        </ItemGrid>
      )}
    </>
  );
}

export default ResultItems;
