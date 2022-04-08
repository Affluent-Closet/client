/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  FlexCenter,
  ItemGrid,
  ListHead,
  PageContainer,
} from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useGoodsQueryForm from 'hooks/search/useGoodsQueryForm';
import useGoodsEffect from 'hooks/goods/useGoodsEffect';
import GridGoodsItem from 'components/common/GridGoodsItem';
import { SortMethod } from 'model/enums';

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
  const { goodsQueryString, onChangeBtnQS } = useGoodsQueryForm(
    searchParams.get('name'),
  );
  const { goodsData } = useGoodsEffect(goodsQueryString);
  const { data: goods, isLoading } = goodsData;
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
            type="button"
            onClick={onChangeBtnQS}
            name="sortBy"
            value={SortMethod.BEST}
          />
          <SortMenu
            type="button"
            name="sortBy"
            onClick={onChangeBtnQS}
            value={SortMethod.NEW}
          />
          <SortMenu
            type="button"
            name="sortBy"
            onClick={onChangeBtnQS}
            value={SortMethod.LOWPRICE}
          />
        </FlexCenter>
      </SearchListHead>
      {isLoading ? (
        <PageContainer>
          <img src="https://loadingapng.com/animation.php?image=5&fore_color=8E1FFF&back_color=FFFFFF&size=128x128&transparency=0&image_type=0&uncacher=46.124579074766395" />
        </PageContainer>
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
