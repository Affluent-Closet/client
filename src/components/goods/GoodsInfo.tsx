import { FlexAlignCenter } from 'components/common/CommonComponents';
import getDiscountPirce from 'hooks/goods/getDiscountPirce';
import useSelectGoods from 'hooks/goods/useSelectGoods';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import { IGoodsItem } from 'model/goods';
import React from 'react';
import styled, { css } from 'styled-components';
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

export const RadioButton = styled.button<{ isSelected: boolean }>`
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
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 2px solid black;
    `}
`;
interface GoodsInfoProps {
  item: IGoodsItem;
}
function GoodsInfo({ item }: GoodsInfoProps) {
  const { thumbnail, price, discount, sizeInfo, name } = item;
  const discountPrice = getDiscountPirce(price, discount);
  const { onClickSize, selectedList, onChangeQuantity, onDeleteList } =
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
          <GoodsInfoTitStyled> Size :</GoodsInfoTitStyled>
          {sizeInfo.map(({ size }, index) => (
            <div key={`sizeInfo_${index}`}>
              <RadioButton
                name="size"
                onClick={() => onClickSize(size)}
                isSelected={selectedList.some(
                  (selectedItem) => selectedItem.size === size,
                )}
              >
                {size}
              </RadioButton>
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
