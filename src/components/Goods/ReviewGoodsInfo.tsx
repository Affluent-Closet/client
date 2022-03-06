import { FlexBetween, FlexCenter } from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const GoodsInfoWrapper = styled(FlexBetween)`
  font-size: 13px;
  align-items: center;
  padding-right: 20px;
  .body-info {
    color: ${palette.temp};
  }
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
    margin-top: 4px;
    color: ${palette.temp};
  }
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
      <div className="body-info">남성, 180cm, 85kg</div>
    </GoodsInfoWrapper>
  );
}

export default ReviewGoodsInfo;
