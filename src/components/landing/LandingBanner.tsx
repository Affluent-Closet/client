import { mediaSize } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const LandingBannerContainer = styled.section`
  width: 100vw;
  height: 20vh;
  background-color: ${palette.temp};
  max-width: ${mediaSize.large}px;
  margin: 0 auto;
`;

function LandingBanner() {
  return <LandingBannerContainer />;
}

export default LandingBanner;