import { PageWrapper } from 'components/common/CommonComponents';
import LandingBanner from 'components/landing/LandingBanner';
import LandingList from 'components/landing/LandingList';
import React from 'react';

function LandingPage() {
  return (
    <PageWrapper>
      <LandingBanner />
      <LandingList>BEST ITEM</LandingList>
      <LandingList>NEW ARRIVAL</LandingList>
    </PageWrapper>
  );
}

export default LandingPage;
