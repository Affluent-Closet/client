/* eslint-disable jsx-a11y/alt-text */
import { FlexAlignCenter, ItemGrid } from 'components/common/CommonComponents';
import useGoodsEffect from 'hooks/goods/useGoodsEffect';
import { mediaSize } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
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
  const { goodsQuery } = useGoodsEffect(8);
  const { data: goods, isLoading } = goodsQuery;
  return (
    <LandingListContainer>
      {isLoading ? (
        <FlexAlignCenter>
          <img src="https://loadingapng.com/animation.php?image=5&fore_color=8E1FFF&back_color=FFFFFF&size=128x128&transparency=0&image_type=0&uncacher=46.124579074766395" />
        </FlexAlignCenter>
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
