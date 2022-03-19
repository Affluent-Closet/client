import axios from 'axios';
import GoodsInfo from 'components/goods/GoodsInfo';
import GoodsInquiry from 'components/goods/GoodsInquiry';
import GoodsReview from 'components/goods/GoodsReview';
import GoodsReviewSummery from 'components/goods/GoodsReviewSummery';
import TabBox from 'components/goods/TabBox';
import useMoveScrool from 'hooks/common/useMoveScrool';
import { mediaSize } from 'libs/styles/media';
import React, { useEffect, useState } from 'react';
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
  const goodsTabs = {
    0: useMoveScrool('상품 상세'),
    1: useMoveScrool('리뷰'),
    2: useMoveScrool('상품 문의'),
    length: 3,
  };
  // const [asd, setasd] = useState();
  // useEffect(() => {
  //   const data = async () => {
  //     const response = await axios.get(
  //       'https://affluent-closet.herokuapp.com/goods',
  //     );
  //     setasd(response.data);
  //   };
  //   data();
  // }, []);
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
      <GoodsReviewSummery />
      <GoodsReview />
      <TabBox goodsTabs={Array.from(goodsTabs)} th={2} />
      <GoodsInquiry />
    </>
  );
}

export default GoodsPage;
