import Button from 'components/Button/Button';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';
import { BiTrashAlt } from 'react-icons/bi';

const GoodsInfoWrapper = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 100%;
`;

const GoodsThumbBox = styled.img`
  width: 500px;
  height: 600px;
  border: 1px solid ${palette.border};
  margin-right: 15px;
`;

const GoodsPriceStyled = styled.div`
  display: flex;
  margin-bottom: 20px;
  .discount-price {
    font-size: 25px;
  }
  .original-price {
    margin: 5px;
    line-height: 15px;
    text-decoration: line-through;
    color: rgba(51, 51, 51, 0.5);
  }
  .discount-rate {
    font-size: 22px;
    color: ${palette.mainColor};
  }
`;

const GoodsTitleStyled = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const GoodsInfoBox = styled.div`
  padding: 10px 0px 0px 15px;
  max-width: 400px;
`;

const GoodsInfoSection = styled.div`
  display: flex;
  align-items: center;
  margin: 13px 0px;
`;

const GoodsInfoTitStyled = styled.div`
  width: 70px;
  font-size: 15px;
`;

const Label = styled.label`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  border: 2px solid ${palette.border};
  margin-right: 4px;
  text-align: center;
  line-height: 23px;
  font-size: 10px;
`;

const RadioButton = styled.input`
  display: none;
  &:checked + ${Label} {
    border: 2px solid black;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BuyButton = styled(Button)`
  margin: 0px 2px;
`;

const SelectedOptionBox = styled.div`
  margin: 10px 0px;
  border-top: 1px solid ${palette.border};
`;

const SelectedOptionStyled = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 48px;
  padding: 6px 5px 6px 9px;
  border: 1px solid ${palette.border};
  border-top: none;
  .quantity {
    display: flex;
  }
`;

function GoodsInfo() {
  return (
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
        <GoodsInfoSection>
          <GoodsInfoTitStyled> Color :</GoodsInfoTitStyled>
          <RadioButton type="radio" id="c1" name="color" />
          <Label htmlFor="c1" color="pink" />
          <RadioButton type="radio" id="c2" name="color" />
          <Label htmlFor="c2" color="blue" />
          <RadioButton type="radio" id="c3" name="color" />
          <Label htmlFor="c3" color="green" />
          <RadioButton type="radio" id="c4" name="color" />
          <Label htmlFor="c4" color="red" />
        </GoodsInfoSection>
        <hr />
        <GoodsInfoSection>
          <GoodsInfoTitStyled> Size :</GoodsInfoTitStyled>
          <RadioButton type="radio" id="s1" name="size" />
          <Label htmlFor="s1">S</Label>
          <RadioButton type="radio" id="s2" name="size" />
          <Label htmlFor="s2">M</Label>
          <RadioButton type="radio" id="s3" name="size" />
          <Label htmlFor="s3">L</Label>
        </GoodsInfoSection>
        <hr />
        <SelectedOptionBox>
          <SelectedOptionStyled>
            <div>L</div>
            <div className="quantity">
              <div>-</div>
              <div>2</div>
              <div>+</div>
            </div>
            <div>
              <div> 85,900원</div>
              <BiTrashAlt />
            </div>
          </SelectedOptionStyled>
          <SelectedOptionStyled>
            <div>총 상품 금액</div>
            <div>257,000원</div>
          </SelectedOptionStyled>
        </SelectedOptionBox>
        <BtnGroup>
          <BuyButton
            width="160px"
            height="40px"
            buttonColor="mainColor"
            fontColor="white"
            fontSize="14px"
            fontWeight="bold"
            hoverButtonColor="mainHoverColor"
          >
            구매하기
          </BuyButton>
          <BuyButton
            width="160px"
            height="40px"
            fontSize="14px"
            fontWeight="bold"
            hasBorder
            hoverButtonColor="backgroundHover"
          >
            장바구니
          </BuyButton>
        </BtnGroup>
      </GoodsInfoBox>
    </GoodsInfoWrapper>
  );
}

export default GoodsInfo;
