import { FlexCenter } from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const ScorePercentile = styled(FlexCenter)<{ score: number }>`
  width: 100%;
  background-color: ${palette.backgroundHover};
  justify-content: left;
  margin-right: 10px;
  height: 8px;
  .occupy {
    width: ${(props) => (props.score ? `${props.score}%` : '0%')};
    background-color: coral;
    height: 8px;
  }
`;

const ScoreSection = styled(FlexCenter)`
  margin: 8px 0px;
`;

const ScoreTit = styled.div`
  font-weight: 500;
  min-width: 80px;
  font-size: 13px;
  margin-left: 30px;
  margin-right: 10px;
`;

const CountSection = styled.div`
  width: 40px;
`;
interface ReviewScoreBox {
  tit: string;
  points: number;
  reviewCount: number;
}

function ReviewScoreBox({ tit, points, reviewCount }: ReviewScoreBox) {
  return (
    <ScoreSection>
      <ScoreTit>{tit}</ScoreTit>
      <ScorePercentile score={(reviewCount / points) * 100}>
        <div className="occupy" />
      </ScorePercentile>
      <CountSection>{reviewCount}</CountSection>
    </ScoreSection>
  );
}

export default ReviewScoreBox;
