import { PageContainer } from 'components/common/CommonComponents';
import LandingBanner from 'components/landing/LandingBanner';
import LandingList from 'components/landing/LandingList';
import useChannelPluginEffect from 'hooks/common/useChannelPluginEffect';
import React from 'react';

function LandingPage() {
  useChannelPluginEffect();
  return (
    <>
      <LandingBanner />
      <LandingList>BEST ITEM</LandingList>
      <LandingList>NEW ARRIVAL</LandingList>
    </>
  );
}

export default LandingPage;
