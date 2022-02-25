import GoodsInfo from 'components/Goods/GoodsInfo';
import useMoveScrool from 'hooks/common/useMoveScrool';
import { palette } from 'libs/styles/palette';
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

const TabBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${palette.backgroundColor};
  margin: 0px 30px;
  .active {
    color: black;
    font-weight: 500;
    background-color: white;
  }
`;

const TabStyled = styled.button`
  display: block;
  text-align: center;
  height: 60px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 22px;
  color: #a0a0a0;
  border: solid 1px ${palette.backgroundHover};
  padding: 20px 0;
  width: 34%;
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
      <TabBox ref={goodsTabs[0].element}>
        {Array.from(goodsTabs).map(({ onMoveToElement, name }, index) => (
          <TabStyled
            type="button"
            onClick={onMoveToElement}
            key={`goodsTabs_${index}`}
            className={index === 0 ? 'active' : ''}
          >
            {name}
          </TabStyled>
        ))}
      </TabBox>
      <GoodsDetailWrapper>
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <TabBox ref={goodsTabs[1].element}>
          {Array.from(goodsTabs).map(({ onMoveToElement, name }, index) => (
            <TabStyled
              type="button"
              onClick={onMoveToElement}
              key={`goodsTabs_${index}`}
              className={index === 1 ? 'active' : ''}
            >
              {name}
            </TabStyled>
          ))}
        </TabBox>
        <TabBox ref={goodsTabs[1].element}>
          {Array.from(goodsTabs).map(({ onMoveToElement, name }, index) => (
            <TabStyled
              type="button"
              onClick={onMoveToElement}
              key={`goodsTabs_${index}`}
              className={index === 2 ? 'active' : ''}
            >
              {name}
            </TabStyled>
          ))}
        </TabBox>
      </GoodsDetailWrapper>
    </>
  );
}

export default GoodsPage;
