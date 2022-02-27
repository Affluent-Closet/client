import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { palette } from 'libs/styles/palette';
import { FlexBetween, FlexCenter } from 'components/common/CommonComponents';
import Button from 'components/Button/Button';

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

const RatingScoreBox = styled.div`
  width: 100%;
`;

const ScoreSection = styled(FlexCenter)`
  margin: 8px 0px;
`;

const Rating = styled.div`
  font-size: 48px;
`;

const SummeryEle = styled.div`
  margin: 8px 0px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #14161a;
`;

const ScorePercentile = styled(FlexCenter)<{ score: number }>`
  width: 100%;
  background-color: ${palette.backgroundHover};
  border-radius: 20px;
  justify-content: left;
  margin-right: 10px;
  .occupy {
    width: ${(props) => (props.score ? `${props.score}%` : '0%')};
    background-color: ${palette.hoverDarkColor};
    border-radius: 10px;
  }
`;

const ScoreTit = styled.div`
  font-weight: 500;
  min-width: 80px;
  font-size: 13px;
  margin-left: 30px;
  margin-right: 10px;
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
          <Button
            width="160px"
            height="50px"
            buttonColor="hoverDarkColor"
            fontColor="white"
            hoverButtonColor="backgroundHover"
            hoverFontColor="hoverDarkColor"
          >
            상품 리뷰 작성하기
          </Button>
        </RatingSummeryBox>
        <RatingScoreBox>
          <ScoreSection>
            <ScoreTit>아주 좋아요</ScoreTit>
            <ScorePercentile score={90}>
              <div className="occupy" />
            </ScorePercentile>
            <div>361</div>
          </ScoreSection>
          <ScoreSection>
            <ScoreTit>아주 좋아요</ScoreTit>
            <ScorePercentile score={90}>
              <div className="occupy" />
            </ScorePercentile>
            <div>361</div>
          </ScoreSection>
          <ScoreSection>
            <ScoreTit>아주 좋아요</ScoreTit>
            <ScorePercentile score={90}>
              <div className="occupy" />
            </ScorePercentile>
            <div>361</div>
          </ScoreSection>
          <ScoreSection>
            <ScoreTit>아주 좋아요</ScoreTit>
            <ScorePercentile score={90}>
              <div className="occupy" />
            </ScorePercentile>
            <div>361</div>
          </ScoreSection>
          <ScoreSection>
            <ScoreTit>아주 좋아요</ScoreTit>
            <ScorePercentile score={90}>
              <div className="occupy" />
            </ScorePercentile>
            <div>361</div>
          </ScoreSection>
        </RatingScoreBox>
      </SummaryBox>
    </ReviewWrapper>
  );
}

export default GoodsReview;
