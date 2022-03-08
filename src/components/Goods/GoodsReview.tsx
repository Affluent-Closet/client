import { mediaMin } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';

const ReviewContainer = styled.section`
  margin-top: 30px;
  padding: 30px;
`;

const ReviewBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid ${palette.border};
  line-height: 3;
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  ${mediaMin.medium} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${mediaMin.large} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${mediaMin.xlarge} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
function GoodsReview() {
  return (
    <ReviewContainer>
      <ReviewBox>
        <h2>스타일</h2>
      </ReviewBox>
      <ReviewGrid>
        <ReviewItem /> <ReviewItem /> <ReviewItem /> <ReviewItem />
        <ReviewItem /> <ReviewItem />
        <ReviewItem /> <ReviewItem /> <ReviewItem />
        <ReviewItem />
      </ReviewGrid>
    </ReviewContainer>
  );
}

export default GoodsReview;
