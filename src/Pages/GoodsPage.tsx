import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const GoodsInfoWrapper = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  text-align: left;
`;

const GoodsThumbBox = styled.img`
  width: 500px;
  height: 600px;
  border: 1px solid ${palette.border};
  margin-right: 15px;
`;

const GoodsInfoBox = styled.div`
  padding: 10px 0px 0px 15px;
  width: 400px;
  .size-table {
    background-color: brown;
    height: 200px;
  }
`;

const GoodsPriceStyled = styled.div`
  display: flex;
  .discount-price {
    font-size: 25px;
    color: ${palette.mainColor};
  }
  .original-price {
    margin: 5px;
    line-height: 15px;
    text-decoration: line-through;
    color: rgba(51, 51, 51, 0.5);
  }
  .discount-rate {
    font-size: 22px;
    color: ${palette.mainLightColor};
  }
`;

const GoodsTitleStyled = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const GoodsDetailWrapper = styled.div`
  padding: 30px;
`;

const GoodsImg = styled.img`
  width: 800px;
`;

function GoodsPage() {
  return (
    <>
      <GoodsInfoWrapper>
        <GoodsThumbBox src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg" />

        <GoodsInfoBox>
          <GoodsTitleStyled>데이브레이크 운동화</GoodsTitleStyled>
          <GoodsPriceStyled>
            <div className="discount-price">104,000</div>
            <div className="original-price">130,000</div>
            <div className="discount-rate">20%</div>
          </GoodsPriceStyled>
          <hr />
          <div>
            size :
            <select>
              <option key="banana" value="banana">
                바나나
              </option>
              <option key="apple" value="apple">
                사과
              </option>
              <option key="orange" value="orange">
                오렌지
              </option>
            </select>
            <hr />
          </div>
          <div>
            color :
            <select>
              <option key="banana" value="banana">
                바나나
              </option>
              <option key="apple" value="apple">
                사과
              </option>
              <option key="orange" value="orange">
                오렌지
              </option>
            </select>
            <hr />
          </div>
          <div className="size-table">사이즈 테이블</div>
        </GoodsInfoBox>
      </GoodsInfoWrapper>
      <hr />
      <GoodsDetailWrapper>
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
        <GoodsImg
          src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg"
          alt="의상 이미지"
        />
      </GoodsDetailWrapper>
    </>
  );
}

export default GoodsPage;
