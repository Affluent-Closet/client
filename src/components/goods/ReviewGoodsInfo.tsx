import { FlexBetween, FlexCenter } from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import { Gender } from 'model/enums';
import { IReviewItem } from 'model/review';
import React from 'react';
import styled from 'styled-components';

const GoodsInfoWrapper = styled(FlexBetween)`
  font-size: 13px;
  align-items: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 45px;
  height: 54px;
  border-radius: 4px;
`;

const Item = styled.div`
  margin-left: 10px;
  padding-top: 1px;
  display: flex;
  flex-direction: column;
  .purchase {
    margin: 4px 0;
    color: ${palette.temp};
  }
`;

const EmptyRating = styled.img`
  display: block;
  width: 100px;
  height: 17px;
  float: left;
  position: absolute;
`;

const Rating = styled(EmptyRating)<{ ratingIndex: number }>`
  /* width: ${(props) => props.ratingIndex}px; */
  overflow: hidden;
  ${(props) => `clip: rect(0px ${props.ratingIndex}px 17px 0px)`}
`;

interface ReviewGoodsInfoProps {
  contents: IReviewItem;
}
function ReviewGoodsInfo({ contents }: ReviewGoodsInfoProps) {
  const { gender, height, weight, goods } = contents;
  return (
    <GoodsInfoWrapper>
      <FlexCenter>
        <Image src={goods.thumbnail} alt="상품 이미지" />
        <Item>
          <div>{goods.name}</div>
          <div className="purchase">M 구매</div>
        </Item>
      </FlexCenter>
      <Item>
        <div className="purchase">
          {gender === Gender.MAIL ? '남자' : '여자'}, {height}cm, {weight}kg
        </div>
        <div>
          <EmptyRating
            src="https://static.msscdn.net/ui/build/pc/img/common/ic-star-off.svg?v=20220303172627"
            alt="빈 별점"
          />
          <Rating
            ratingIndex={60}
            src="https://static.msscdn.net/ui/build/pc/img/common/ic-star-on.svg?v=20220303172627"
            alt="찬 별점"
          />
        </div>
      </Item>
    </GoodsInfoWrapper>
  );
}

export default ReviewGoodsInfo;
