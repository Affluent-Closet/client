import { FlexAlignCenter } from 'components/common/CommonComponents';
import getDiscountPirce from 'hooks/goods/getDiscountPirce';
import useSelectGoods from 'hooks/goods/useSelectGoods';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import { IGoodsItem } from 'model/goods';
import React from 'react';
import styled from 'styled-components';
import GoodsCalculBox from './GoodsCalculBox';
import GoodsPriceBox from './GoodsPriceBox';

const GoodsInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  ${mediaMax.large} {
    display: block;
    text-align: center;
  }
`;

const GoodsThumbBox = styled.img`
  width: 100%;
  max-width: 450px;
  max-height: 560px;
  border: 1px solid ${palette.border};
  margin-right: 15px;
  ${mediaMax.large} {
    margin-right: 0px;
  }
`;

const GoodsInfoBox = styled.div`
  padding: 10px 0px 0px 15px;
  width: 100%;
  max-width: 450px;
  min-width: 220px;
  margin-bottom: 30px;
  ${mediaMax.large} {
    padding: 40px 10px;
    margin: 0 auto;
  }
`;

const GoodsInfoSection = styled(FlexAlignCenter)`
  margin: 13px 0px;
`;

const GoodsInfoTitStyled = styled.div`
  width: 70px;
  font-size: 15px;
`;

export const RadioLabel = styled.label`
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

export const RadioButton = styled.input`
  display: none;
  &:checked + ${RadioLabel} {
    border: 2px solid black;
  }
`;
interface GoodsInfoProps {
  item: IGoodsItem;
}
function GoodsInfo({ item }: GoodsInfoProps) {
  const { thumbnail, price, discount, sizeInfo, name } = item;
  const discountPrice = getDiscountPirce(price, discount);
  const { onChangeList, selectedList, onChangeQuantity, onDeleteList } =
    useSelectGoods(discountPrice);

  return (
    <GoodsInfoWrapper>
      <GoodsThumbBox src={thumbnail} />
      <GoodsInfoBox>
        <GoodsPriceBox
          goodsName={name}
          price={price}
          discount={discount}
          discountPriceIndex={discountPrice}
        />
        <hr />
        <GoodsInfoSection>
          <GoodsInfoTitStyled> Color :</GoodsInfoTitStyled>
          <RadioButton
            type="radio"
            id="c1"
            name="color"
            onChange={onChangeList}
          />
          <RadioLabel htmlFor="c1" color="pink" />
          <RadioButton
            type="radio"
            id="c2"
            name="color"
            onChange={onChangeList}
          />
          <RadioLabel htmlFor="c2" color="blue" />
          <RadioButton
            type="radio"
            id="c3"
            name="color"
            onChange={onChangeList}
          />
          <RadioLabel htmlFor="c3" color="green" />
          <RadioButton
            type="radio"
            id="c4"
            name="color"
            onChange={onChangeList}
          />
          <RadioLabel htmlFor="c4" color="red" />
        </GoodsInfoSection>
        <hr />
        <GoodsInfoSection>
          <GoodsInfoTitStyled> Size :</GoodsInfoTitStyled>
          {sizeInfo.map(({ size }, index) => (
            <div key={`sizeInfo_${index}`}>
              <RadioButton
                type="radio"
                id={size}
                name="size"
                onChange={onChangeList}
              />
              <RadioLabel htmlFor={size}>{size}</RadioLabel>
            </div>
          ))}
        </GoodsInfoSection>
        <hr />
        <GoodsCalculBox
          selectedItems={selectedList}
          onChangeQuantity={onChangeQuantity}
          onDeleteList={onDeleteList}
        />
      </GoodsInfoBox>
    </GoodsInfoWrapper>
  );
}

export default GoodsInfo;
