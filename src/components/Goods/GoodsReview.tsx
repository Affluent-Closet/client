import { ItemGrid } from 'components/common/CommonComponents';
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

function GoodsReview() {
  return (
    <ReviewContainer>
      <ReviewBox>
        <h2>스타일</h2>
      </ReviewBox>
      <ItemGrid>
        <ReviewItem /> <ReviewItem /> <ReviewItem /> <ReviewItem />
        <ReviewItem /> <ReviewItem />
        <ReviewItem /> <ReviewItem /> <ReviewItem />
        <ReviewItem />
      </ItemGrid>
    </ReviewContainer>
  );
}

export default GoodsReview;
