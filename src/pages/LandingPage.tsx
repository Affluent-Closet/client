import axios from 'axios';
import { PageContainer } from 'components/common/CommonComponents';
import LandingBanner from 'components/landing/LandingBanner';
import LandingList from 'components/landing/LandingList';
import { getGoodsAPI } from 'libs/api/goodsAPI';
import React from 'react';

function LandingPage() {
  return (
    <PageContainer>
      <LandingBanner />
      <LandingList>BEST ITEM</LandingList>
      <LandingList>NEW ARRIVAL</LandingList>
    </PageContainer>
  );
}

export default LandingPage;
