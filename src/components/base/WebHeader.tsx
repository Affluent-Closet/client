import { TextLogo } from 'assets/Img';
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

const LeftHeaderBox = styled.div`
  .menu-box {
    display: none;
  }
  .menu-styled {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 0px 15px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  &:hover {
    .menu-styled {
      color: ${palette.mainLightColor};
    }
    .menu-box {
      display: block;
      position: absolute;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin-left: 15px;
    }
    .menu-box-list {
      transition: background-color 0.2s linear;
      width: 160px;
      padding: 30px 20px;
      font-weight: bold;
      background-color: ${palette.backgroundColor};
      &:hover {
        background-color: ${palette.mainColor};
        color: ${palette.backgroundColor};
      }
    }
  }
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
        <LeftHeaderBox>
          <div className="menu-styled">Best</div>
          <div className="menu-box">
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
          </div>
        </LeftHeaderBox>
        <LeftHeaderBox>
          <div className="menu-styled">Best</div>
          <div className="menu-box">
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
          </div>
        </LeftHeaderBox>
        <LeftHeaderBox>
          <div className="menu-styled">Best</div>
          <div className="menu-box">
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
          </div>
        </LeftHeaderBox>
        <LeftHeaderBox>
          <div className="menu-styled">Best</div>
          <div className="menu-box">
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
            <div className="menu-box-list">Outer</div>
          </div>
        </LeftHeaderBox>
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
