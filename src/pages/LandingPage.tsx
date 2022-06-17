import { PageContainer } from 'components/common/CommonComponents';
import LandingBanner from 'components/landing/LandingBanner';
import LandingList from 'components/landing/LandingList';
import useChannelPluginEffect from 'hooks/common/useChannelPluginEffect';
import React from 'react';

function LandingPage() {
  useChannelPluginEffect();

  return (
    <PageContainer>
      <LandingBanner />
      <LandingList isBest />
      <LandingList />
    </PageContainer>
  );
}

export default LandingPage;
