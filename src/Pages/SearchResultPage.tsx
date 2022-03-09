import { ItemGrid, ListHead } from 'components/common/CommonComponents';
import GridGoodsItem from 'components/common/GridGoodsItem';
import SearchField from 'components/search/SearchField';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';
import { SearchPageWrapper } from './SearchPage';

const SearchListHead = styled(ListHead)`
  display: flex;
  .search-keyword {
    color: ${palette.mainColor};
  }
`;

function SearchResultPage() {
  return (
    <SearchPageWrapper>
      <SearchField />
      <SearchListHead>
        <div className="search-keyword">데님</div>에 대한 검색 결과
      </SearchListHead>
      <ItemGrid>
        <GridGoodsItem />
        <GridGoodsItem />
        <GridGoodsItem />
        <GridGoodsItem />
        <GridGoodsItem />
        <GridGoodsItem />
      </ItemGrid>
    </SearchPageWrapper>
  );
}

export default SearchResultPage;
