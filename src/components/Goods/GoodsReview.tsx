import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { palette } from 'libs/styles/palette';
import { FlexBetween, FlexCenter } from 'components/common/CommonComponents';

const ReviewWrapper = styled.div`
  margin: 0px 30px;
`;

const ReviewTit = styled.div`
  font-size: 22px;
  text-align: left;
  border-bottom: 2px solid #14161a;
  padding: 16px 0;
  width: 100%;
`;

const SummaryBox = styled(FlexBetween)`
  padding: 32px 0px;
`;

const RatingSummeryBox = styled.div`
  border-right: 1px solid ${palette.border};
  width: 400px;
`;

const RatingIndexBox = styled.div`
  width: 100%;
`;

const Rating = styled.div`
  font-size: 48px;
`;

const SummeryEle = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #14161a;
`;

function GoodsReview() {
  return (
    <ReviewWrapper>
      <ReviewTit>Review</ReviewTit>
      <SummaryBox>
        <RatingSummeryBox>
          <FlexCenter>
            <BsStarFill color={palette.mainLightColor} size="44" />
            <Rating>4.9</Rating>
          </FlexCenter>
          <SummeryEle>98%의 구매자가 이 상품을 좋아합니다.</SummeryEle>
          <div>상품 리뷰 작성하기</div>
        </RatingSummeryBox>
        <RatingIndexBox>
          <FlexCenter>
            <div>아주 좋아요</div>
            <div>막대기</div>
            <div>361</div>
          </FlexCenter>
          <FlexCenter>
            <div>맘에 들어요</div>
            <div>막대기</div>
            <div>29</div>
          </FlexCenter>
          <FlexCenter>
            <div>보통이에요</div>
            <div>막대기</div>
            <div>2</div>
          </FlexCenter>
          <FlexCenter>
            <div>그냥 그래요</div>
            <div>막대기</div>
            <div>1</div>
          </FlexCenter>
          <FlexCenter>
            <div>별로에요</div>
            <div>막대기</div>
            <div>3</div>
          </FlexCenter>
        </RatingIndexBox>
      </SummaryBox>
    </ReviewWrapper>
  );
}

export default GoodsReview;
