import { ItemGrid } from 'components/common/CommonComponents';
import useReviewLoad from 'hooks/review/useReviewLoad';
import useReviewQueryForm from 'hooks/review/useReviewQueryForm';
import { palette } from 'libs/styles/palette';
import React from 'react';
import { useParams } from 'react-router-dom';
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
  const params = useParams<'goodsid'>();
  const { reviewQS } = useReviewQueryForm(params.goodsid as string);
  const { reviewData } = useReviewLoad(reviewQS);
  const { data: reviews } = reviewData;
  return (
    <ReviewContainer>
      <ReviewBox>
        <h2>스타일</h2>
      </ReviewBox>
      <ItemGrid>
        {reviews &&
          reviews.items.map((review) => (
            <ReviewItem key={review.id} contents={review} />
          ))}
      </ItemGrid>
    </ReviewContainer>
  );
}

export default GoodsReview;
