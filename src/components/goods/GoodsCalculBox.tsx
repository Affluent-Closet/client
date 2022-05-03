import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { palette } from 'libs/styles/palette';
import { IGoodsItem, IOrderItem } from 'model/goods';
import useDiscountCal from 'hooks/goods/useDiscountCal';
import useTotalPrice from 'hooks/goods/useTotalPrice';
import { IconType } from 'react-icons';

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
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantityStyled = styled(FlexBox)`
  width: 26px;
  height: 26px;
`;

const QuantityCtrlStlyed = styled.button`
  width: 26px;
  height: 26px;
  background-color: #eee;
  cursor: pointer;
`;

const DeletOptBtn = styled(AiOutlineClose)`
  margin: 0px 4px 0px 7px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${palette.backgroundHover};
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;
const BuyButton = styled(Button)`
  margin: 0px 2px;
  width: 100%;
  max-width: 240px;
`;

interface GoodsCalculProps {
  item: IGoodsItem;
  selectedItems: IOrderItem[];
  onChangeQuantity: (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => void;
}

function GoodsCalculBox({
  item,
  selectedItems,
  onChangeQuantity,
}: GoodsCalculProps) {
  const { price, discount } = item;
  const { discountPriceString } = useDiscountCal(price, discount);
  // const { totalPriceString } = useTotalPrice(, price);
  return (
    <>
      {selectedItems.length !== 0 &&
        selectedItems.map(({ color, size, quantity }, index) => (
          <SelectedOptionBox key={`${color}${size}_${index}`}>
            <SelectedOptionStyled>
              <div>
                {size},{color}
              </div>
              <FlexBox>
                <QuantityCtrlStlyed
                  value={-1}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    onChangeQuantity(e, index);
                  }}
                >
                  <AiOutlineMinus size={18} />
                </QuantityCtrlStlyed>
                <QuantityStyled>{quantity}</QuantityStyled>
                <QuantityCtrlStlyed
                  value={1}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    onChangeQuantity(e, index);
                  }}
                >
                  <AiOutlinePlus size={18} />
                </QuantityCtrlStlyed>
              </FlexBox>
              <FlexBox>
                <div> {discountPriceString}원</div>
                <DeletOptBtn
                  onClick={() => {
                    selectedItems.splice(index);
                  }}
                />
              </FlexBox>
            </SelectedOptionStyled>
            <SelectedOptionStyled>
              <div>총 상품 금액</div>
              <div>10000원</div>
              {/* {totalPriceString} */}
            </SelectedOptionStyled>
          </SelectedOptionBox>
        ))}
      <BtnGroup>
        <BuyButton
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
          height="40px"
          fontSize="14px"
          fontWeight="bold"
          hasBorder
          hoverButtonColor="backgroundHover"
        >
          장바구니
        </BuyButton>
      </BtnGroup>
    </>
  );
}

export default GoodsCalculBox;
