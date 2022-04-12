import GoodsInfo from 'components/goods/GoodsInfo';
import GoodsInquiry from 'components/goods/GoodsInquiry';
import GoodsReview from 'components/goods/GoodsReview';
import GoodsReviewSummery from 'components/goods/GoodsReviewSummery';
import TabBox from 'components/goods/TabBox';
import useMoveScrool from 'hooks/common/useMoveScrool';
import useOneGoodsEffect from 'hooks/goods/useOneGoodsEffect';
import { mediaSize } from 'libs/styles/media';
import React from 'react';
import styled from 'styled-components';

const GoodsDetailWrapper = styled.div`
  padding: 30px;
  width: 100%;
  max-width: ${mediaSize.xlarge};
`;

const GoodsImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

function GoodsPage() {
  const { goods } = useOneGoodsEffect();

  const [ref1, onMoveToElement1] = useMoveScrool();
  const [ref2, onMoveToElement2] = useMoveScrool();
  const [ref3, onMoveToElement3] = useMoveScrool();

  const scrollList = [
    {
      name: '상품 상세',
      onClick: onMoveToElement1,
    },
    {
      name: '리뷰',
      onClick: onMoveToElement2,
    },
    {
      name: '상품 문의',
      onClick: onMoveToElement3,
    },
  ];

  return (
    <>
      <GoodsInfo item={goods} />
      <TabBox ref={ref1} scrollList={scrollList} th={0} />

      <GoodsDetailWrapper>
        {/* {goods.datail.map((dtil, index) => (
          <GoodsImg key={`detail_${index}`} src={dtil} alt="의상 이미지" />
        ))} */}
        <GoodsImg
          src="https://intempomood.cafe24.com/2022/2022SS/Full Zip-up Cardigan_Black_01.jpg"
          alt="의상 이미지"
        />
      </GoodsDetailWrapper>
      <TabBox ref={ref2} scrollList={scrollList} th={1} />
      <GoodsReviewSummery />
      <GoodsReview />
      <TabBox ref={ref3} scrollList={scrollList} th={2} />
      <GoodsInquiry />
    </>
  );
}

export default GoodsPage;
