import { Banner2 } from 'assets/img';
import { mediaSize } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const LandingBannerContainer = styled.img`
  width: 100%;
  background-color: ${palette.temp};
  max-width: ${mediaSize.xlarge}px;
  margin: 0 auto;
`;

function LandingBanner() {
  // 베너 정식 사이즈는 1306x390px 입니다.
  return <LandingBannerContainer src={Banner2} />;
}

export default LandingBanner;
