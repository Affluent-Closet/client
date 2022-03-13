import { mediaSize } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const LandingBannerContainer = styled.section`
  width: 100%;
  height: 180px;
  background-color: ${palette.temp};
  max-width: ${mediaSize.xlarge}px;
  margin: 0 auto;
`;

function LandingBanner() {
  return <LandingBannerContainer />;
}

export default LandingBanner;
