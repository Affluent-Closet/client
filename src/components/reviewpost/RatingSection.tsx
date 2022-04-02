/* eslint-disable no-nested-ternary */
import { FlexAlignCenter } from 'components/common/CommonComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { palette } from 'libs/styles/palette';

const RatingContainer = styled(FlexAlignCenter)`
  margin: 13px 0px;
  .inactive {
    color: ${palette.border};
  }
  .active {
    color: coral;
  }
`;

const RatingStar = styled(AiFillStar)`
  cursor: pointer;
`;

const PIndex = styled.p`
  margin: 0 5px;
`;

function RatingSection() {
  const [ratingIndex, setRatingIndex] = useState(1);
  const ArrayIndexes = [1, 2, 3, 4, 5];
  return (
    <RatingContainer>
      {ArrayIndexes.map((arrayindex, index) => (
        <RatingStar
          size={35}
          key={`rating_${index}`}
          className={arrayindex <= ratingIndex ? 'active' : 'inactive'}
          onClick={() => setRatingIndex(arrayindex)}
        />
      ))}
      <PIndex>
        {ratingIndex === 5
          ? '아주 좋아요'
          : ratingIndex === 4
          ? '맘에 들어요'
          : ratingIndex === 3
          ? '보통이에요'
          : ratingIndex === 2
          ? '그냥 그래요'
          : '별로에요'}
      </PIndex>
    </RatingContainer>
  );
}

export default RatingSection;
