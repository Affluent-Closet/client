import { TextLogo } from 'assets/Img';
import LeftHeaderBox from 'components/base/LeftHeaderBox';
import { mediaMaxQuery, mediaSize } from 'libs/styles/media';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';
import RightHeaderBox from './RightHeaderBox';

const WebHeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  color: black;
  width: ${mediaSize.xlarge}px;
  margin: 0 auto;
  ${mediaMaxQuery(mediaSize.large)} {
    display: none;
    position: relative;
  }
  ${mediaMaxQuery(mediaSize.xlarge)} {
    width: auto;
    margin: unset;
  }
`;

const LogoStyled = styled.img`
  width: 120px;
  height: 100px;
`;

function WebHeader() {
  return (
    <WebHeaderBlock>
      <LeftHeaderBox />
      <Link to={Path.LandingPage}>
        <LogoStyled src={TextLogo} alt="사이트 로고" />
      </Link>
      <RightHeaderBox />
    </WebHeaderBlock>
  );
}

export default WebHeader;
