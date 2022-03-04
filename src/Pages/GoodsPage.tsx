import GoodsInfo from 'components/Goods/GoodsInfo';
import GoodsReview from 'components/Goods/GoodsReviewSummery';
import TabBox from 'components/Goods/TabBox';
import useMoveScrool from 'hooks/common/useMoveScrool';
import React from 'react';
import styled from 'styled-components';

const GoodsDetailWrapper = styled.div`
  padding: 30px;
`;

const GoodsImg = styled.img`
  /* width: 800px; */
  display: block;
  margin: 0 auto;
`;

function GoodsPage() {
  const goodsTabs = {
    0: useMoveScrool('상품 상세'),
    1: useMoveScrool('리뷰'),
    2: useMoveScrool('상품 문의'),
    length: 3,
  };
  return (
    <>
      <GoodsInfo />
      <TabBox goodsTabs={Array.from(goodsTabs)} th={0} />

      <GoodsDetailWrapper>
        <GoodsImg
          src="https://intempomood.cafe24.com/2022/2022SS/Full Zip-up Cardigan_Black_01.jpg"
          alt="의상 이미지"
        />
      </GoodsDetailWrapper>
      <TabBox goodsTabs={Array.from(goodsTabs)} th={1} />
      <GoodsReview />
      <TabBox goodsTabs={Array.from(goodsTabs)} th={2} />
    </>
  );
}

export default GoodsPage;
