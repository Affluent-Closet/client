import { FlexBetween, FlexCenter } from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const GoodsInfoWrapper = styled(FlexBetween)`
  font-size: 13px;
  align-items: center;
  padding-right: 20px;
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

function ReviewGoodsInfo() {
  return (
    <GoodsInfoWrapper>
      <FlexCenter>
        <Image
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="이미지"
        />
        <Item>
          <div>데이브레이크 운동화</div>
          <div className="purchase">M 구매</div>
        </Item>
      </FlexCenter>
      <Item>
        <div className="purchase">남성, 180cm, 85kg</div>
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
