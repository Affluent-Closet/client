import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const LandingListItemContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
`;
const LandingListItemImage = styled.div`
  width: 160px;
  height: 196px;
  background-color: ${palette.temp};
`;

const LandingListItemInfo = styled.div``;

const LandingListItemCategory = styled.span`
  display: flex;
  justify-content: flex-start;
  color: ${palette.ListItemCategory};
  font-size: 10px;
  margin-top: 20px;
`;

const LandingListItemName = styled.span`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  line-height: 1.5;
`;

const LandingListItemPrice = styled.span`
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
`;

function LandingListItem() {
  return (
    <LandingListItemContainer>
      <LandingListItemImage />
      <LandingListItemInfo>
        <LandingListItemCategory>Premium denim</LandingListItemCategory>
        <LandingListItemName>스트레이트핏 데님</LandingListItemName>
        <LandingListItemPrice>98,000원</LandingListItemPrice>
      </LandingListItemInfo>
    </LandingListItemContainer>
  );
}

export default LandingListItem;
