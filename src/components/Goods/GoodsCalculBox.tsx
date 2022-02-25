import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import { palette } from 'libs/styles/palette';

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

const QuantityCtrlStlyed = styled(QuantityStyled)`
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

function GoodsCalculBox() {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <SelectedOptionBox>
        <SelectedOptionStyled>
          <div>L</div>
          <FlexBox>
            <QuantityCtrlStlyed>
              <AiOutlineMinus
                size={18}
                onClick={() => setQuantity(quantity - 1)}
              />
            </QuantityCtrlStlyed>
            <QuantityStyled>{quantity}</QuantityStyled>
            <QuantityCtrlStlyed>
              <AiOutlinePlus
                size={18}
                onClick={() => setQuantity(quantity + 1)}
              />
            </QuantityCtrlStlyed>
          </FlexBox>
          <FlexBox>
            <div> 85,900원</div>
            <DeletOptBtn />
          </FlexBox>
        </SelectedOptionStyled>
        <SelectedOptionStyled>
          <div>총 상품 금액</div>
          <div>257,000원</div>
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
