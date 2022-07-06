import { FlexBetween, FlexColumn } from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const SummerySection = styled(FlexBetween)`
  border-bottom: 3px solid ${palette.mainColor};
  justify-content: space-evenly;
`;
const SummeryEleBox = styled(FlexColumn)`
  height: 60px;
  padding: 0 20px;
  justify-content: center;
`;
const CountStyled = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;
`;

const EleNameStyled = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 4px;
`;
/**
 * 임시 데이터
 */
function OrderSummery() {
  return (
    <SummerySection>
      <SummeryEleBox>
        <CountStyled>10</CountStyled>
        <EleNameStyled>전체</EleNameStyled>
      </SummeryEleBox>
      <SummeryEleBox>
        <CountStyled>2</CountStyled>
        <EleNameStyled>결제</EleNameStyled>
      </SummeryEleBox>
      <SummeryEleBox>
        <CountStyled>4</CountStyled>
        <EleNameStyled>배송중</EleNameStyled>
      </SummeryEleBox>
      <SummeryEleBox>
        <CountStyled>4</CountStyled>
        <EleNameStyled>배송 완료</EleNameStyled>
      </SummeryEleBox>
    </SummerySection>
  );
}

export default OrderSummery;
