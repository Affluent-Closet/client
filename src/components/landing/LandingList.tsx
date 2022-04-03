import { ItemGrid } from 'components/common/CommonComponents';
import useGoodsEffect from 'hooks/goods/useGoodsEffect';
import { mediaSize } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import { IGoodsResponse } from 'model/goods';
import React, { ReactNode } from 'react';
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

function LandingList({ children }: { children: ReactNode }) {
  const { goodsQuery } = useGoodsEffect();
  const { data: goods, isLoading } = goodsQuery;

  return (
    <LandingListContainer>
      {isLoading ? (
        <div>asd</div>
      ) : (
        <LandingListInner>
          <LandingListCategory>
            <h2>{children}</h2>
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
