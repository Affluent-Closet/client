import { TextLogo } from 'assets/Img';
import LeftHeaderBox from 'components/LeftHeaderBox';
import { mediaMinQuery, mediaSize } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';

const WebHeaderBlock = styled.div`
  display: none;
  position: relative;
  ${mediaMinQuery(mediaSize.large)} {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    color: ${palette.mainColor};
    max-width: ${mediaSize.xlarge}px;
    margin: 0 auto;
  }
`;

const WebHeaderLeftBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
`;

const WebHeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: right;
  .right-text {
    font-size: 16px;
    padding: 0px 8px;
  }
`;

const LogoStyled = styled(Link)`
  img {
    width: 120px;
    height: 100px;
  }
`;

function WebHeader() {
  return (
    <WebHeaderBlock>
      <WebHeaderLeftBox>
        <LeftHeaderBox />
      </WebHeaderLeftBox>
      <LogoStyled to={Path.HomePage}>
        <img src={TextLogo} alt="사이트 로고" />
      </LogoStyled>
      <WebHeaderRightBox>
        <div className="right-text">로그인</div>
        <div className="right-text">로그인</div>
        <div className="right-text">로그인</div>
      </WebHeaderRightBox>
    </WebHeaderBlock>
  );
}

export default WebHeader;
