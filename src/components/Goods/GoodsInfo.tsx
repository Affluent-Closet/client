import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';
import GoodsCalculBox from './GoodsCalculBox';
import GoodsPriceBox from './GoodsPriceBox';

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
  width: 100%;
  max-width: 400px;
  min-width: 220px;
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

function GoodsInfo() {
  return (
    <GoodsInfoWrapper>
      <GoodsThumbBox src="https://image.msscdn.net/images/prd_img/20220121/2319884/detail_2319884_2_500.jpg" />
      <GoodsInfoBox>
        <GoodsPriceBox />
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
        <GoodsCalculBox />
      </GoodsInfoBox>
    </GoodsInfoWrapper>
  );
}

export default GoodsInfo;
