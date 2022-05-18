import GoodsInfo from 'components/goods/GoodsInfo';
import GoodsInquiry from 'components/goods/GoodsInquiry';
import GoodsReview from 'components/goods/GoodsReview';
import GoodsReviewSummary from 'components/goods/GoodsReviewSummary';
import TabBox from 'components/goods/TabBox';
import useMoveScrool from 'hooks/common/useMoveScrool';
import useOneGoodsEffect from 'hooks/goods/useOneGoodsEffect';
import { mediaSize } from 'libs/styles/media';
import React, { useEffect, useRef } from 'react';
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
  max-width: 900px;
`;

function GoodsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'nearest',
    });
  }, []);

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
    <div ref={scrollRef}>
      <GoodsInfo item={goods} />
      <TabBox ref={ref1} scrollList={scrollList} th={0} />

      <GoodsDetailWrapper>
        {goods.detail.map((dtil, index) => (
          <GoodsImg key={`detail_${index}`} src={dtil} alt="의상 이미지" />
        ))}
      </GoodsDetailWrapper>
      <TabBox ref={ref2} scrollList={scrollList} th={1} />
      <GoodsReviewSummary />
      <GoodsReview />
      <TabBox ref={ref3} scrollList={scrollList} th={2} />
      <GoodsInquiry />
    </div>
  );
}

export default GoodsPage;
