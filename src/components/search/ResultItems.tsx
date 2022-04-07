import React from 'react';
import {
  FlexCenter,
  ItemGrid,
  ListHead,
} from 'components/common/CommonComponents';
// import GridGoodsItem from 'components/common/GridGoodsItem';
import { palette } from 'libs/styles/palette';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useGoodsQueryForm from 'hooks/search/useGoodsQueryForm';
import useGoodsEffect from 'hooks/goods/useGoodsEffect';

const SearchListHead = styled(ListHead)`
  display: flex;
  justify-content: space-between;
  .search-keyword {
    color: ${palette.mainColor};
    text-transform: uppercase;
  }
`;

export const SortMenu = styled.div`
  padding: 0px 4px;
  border-right: 1px solid ${palette.temp};
  color: ${palette.temp};
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: black;
    font-weight: 500;
    text-decoration: underline;
  }
`;

interface ResultItemsProps {
  isSearch?: boolean;
  keyword?: string;
}
function ResultItems({ isSearch, keyword }: ResultItemsProps) {
  const [searchParams] = useSearchParams();
  const { goodsQueryString } = useGoodsQueryForm(searchParams.get('name'));
  const { goodsData } = useGoodsEffect(goodsQueryString);
  return (
    <>
      <SearchListHead>
        {isSearch ? (
          <FlexCenter>
            <div className="search-keyword">{searchParams.get('name')}</div>에
            대한 검색 결과
          </FlexCenter>
        ) : (
          <div className="search-keyword">{keyword}</div>
        )}
        <FlexCenter>
          <SortMenu
          // onClick={onChangeGoodsQueryString}
          >
            인기순
          </SortMenu>
          <SortMenu
          // onClick={onChangeGoodsQueryString}
          >
            최신순
          </SortMenu>
          <SortMenu>낮은 가격순</SortMenu>
        </FlexCenter>
      </SearchListHead>
      <ItemGrid>{/* <GridGoodsItem /> */}</ItemGrid>
    </>
  );
}

export default ResultItems;
