import {
  FlexCenter,
  ItemGrid,
  ListHead,
} from 'components/common/CommonComponents';
import GridGoodsItem from 'components/common/GridGoodsItem';
import SearchField from 'components/search/SearchField';
import { palette } from 'libs/styles/palette';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';
import { SearchPageWrapper } from './SearchPage';

const SearchListHead = styled(ListHead)`
  display: flex;
  justify-content: space-between;
  .search-keyword {
    color: ${palette.mainColor};
  }
`;

const SortMenu = styled.div`
  padding: 0px 4px;
  border-right: 1px solid ${palette.temp};
  color: ${palette.temp};
  font-weight: 400;
  font-size: 14px;
  :hover {
    color: black;
    font-weight: 500;
    text-decoration: underline;
  }
`;

function SearchResultPage() {
  return (
    <SearchPageWrapper>
      <SearchField />
      <SearchListHead>
        <FlexCenter>
          <div className="search-keyword">데님</div>에 대한 검색 결과
        </FlexCenter>
        <FlexCenter>
          <SortMenu>
            <Link to={Path.SearchResultPage}>인기순</Link>
          </SortMenu>
          <SortMenu>최신순</SortMenu>
          <SortMenu>낮은 가격순</SortMenu>
          <SortMenu>판매량순</SortMenu>
        </FlexCenter>
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
