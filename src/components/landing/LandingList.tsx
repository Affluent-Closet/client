/* eslint-disable jsx-a11y/alt-text */
import { ItemGrid } from 'components/common/CommonComponents';
import LoadingBox from 'components/common/LoadingBox';
import useGoodsEffect from 'hooks/goods/useGoodsEffect';
import useGoodsQueryForm from 'hooks/search/useGoodsQueryForm';
import { mediaSize } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import { SortMethod } from 'model/enums';
import React from 'react';
import styled from 'styled-components';
import GridGoodsItem from '../common/GridGoodsItem';

const LandingListContainer = styled.section`
  margin: 0 auto;
  margin-top: 30px;
  max-width: ${mediaSize.xlarge}px;
`;

const LandingListInner = styled.div`
  margin: 0 auto;
`;

const LandingListCategory = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid ${palette.border};
  line-height: 3;
`;
interface LandingListProps {
  isBest: boolean;
}
function LandingList({ isBest }: LandingListProps) {
  const { goodsQueryString } = useGoodsQueryForm(
    isBest ? SortMethod.BEST : SortMethod.NEW,
  );
  const { goodsData } = useGoodsEffect(goodsQueryString);
  const { data: goods, isLoading } = goodsData;
  return (
    <LandingListContainer>
      {isLoading ? (
        <LoadingBox />
      ) : (
        <LandingListInner>
          <LandingListCategory>
            <h2>{isBest ? 'BEST ITEM' : 'NEW ARRIVAL'}</h2>
          </LandingListCategory>
          <ItemGrid>
            {goods &&
              goods.items.map((good, index) => (
                <GridGoodsItem key={`good_${index}`} item={good} />
              ))}
          </ItemGrid>
        </LandingListInner>
      )}
    </LandingListContainer>
  );
}

export default LandingList;
