import { PageContainer } from 'components/common/CommonComponents';
import LandingBanner from 'components/landing/LandingBanner';
import LandingList from 'components/landing/LandingList';
import React from 'react';

function LandingPage() {
  return (
    <>
      <LandingBanner />
      <LandingList>BEST ITEM</LandingList>
      <LandingList>NEW ARRIVAL</LandingList>
    </>
  );
}

export default LandingPage;
