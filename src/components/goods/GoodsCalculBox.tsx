import React from 'react';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { palette } from 'libs/styles/palette';
import { IOrderItem } from 'model/goods';

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
const ItemPrice = styled.div`
  width: 60px;
`;

interface GoodsCalculProps {
  selectedItems: IOrderItem[];
  onChangeQuantity: (type: 'plus' | 'minus', size: string) => void;
  onDeleteList: (size: string) => void;
}

function GoodsCalculBox({
  selectedItems,
  onChangeQuantity,
  onDeleteList,
}: GoodsCalculProps) {
  const sumAll = selectedItems
    .map((item) => item.total)
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <>
      <SelectedOptionBox>
        {selectedItems.length !== 0 &&
          selectedItems.map(({ size, quantity, total }, index) => (
            <SelectedOptionStyled key={`${size}_${index}`}>
              <div>{size}</div>
              <FlexBox>
                <QuantityCtrlStlyed
                  onClick={() => {
                    onChangeQuantity('minus', size);
                  }}
                >
                  <AiOutlineMinus size={18} />
                </QuantityCtrlStlyed>
                <QuantityStyled>{quantity}</QuantityStyled>
                <QuantityCtrlStlyed
                  onClick={() => {
                    onChangeQuantity('plus', size);
                  }}
                >
                  <AiOutlinePlus size={18} />
                </QuantityCtrlStlyed>
              </FlexBox>
              <FlexBox>
                <ItemPrice>{total.toLocaleString('ko-KR')}원</ItemPrice>
                <DeletOptBtn
                  onClick={() => {
                    onDeleteList(size);
                  }}
                />
              </FlexBox>
            </SelectedOptionStyled>
          ))}
        <SelectedOptionStyled>
          <div>총 상품 금액</div>
          <div>{sumAll.toLocaleString('ko-KR')}원</div>
        </SelectedOptionStyled>
      </SelectedOptionBox>

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
