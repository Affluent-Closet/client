import { palette } from 'libs/styles/palette';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: block;
  height: 57px;
  line-height: 1.42;
  font-size: 12px;
  border-top: 1px solid ${palette.backgroundHover};
  background-color: ${palette.backgroundColor};
  padding: 0px 10px;
  width: 100%;
  bottom: 0;
  margin-top: 10px;
`;

const FooterInner = styled.div`
  height: 100%;
  width: ${(props) => props.theme.basicWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterLinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`;

const Logo = styled.div`
  width: 170px;
  height: 22px;
  margin-right: 28px;
  display: flex;
`;

const LogoText = styled.span`
  font-family: Cafe24Ssurround;
  font-size: 16px;
  color: ${palette.temp};
  line-height: 26px;
  transform: skew(-0.1deg);
`;

const FooterMenu = styled.div`
  display: flex;
  color: ${palette.temp};
`;

const FooterMenuItem = styled.a``;

const VerticalLine = styled.div`
  width: 1px;
  height: 17px;
  margin: 0 19px 0 20px;
  background-color: ${palette.hoverDarkColor};
`;

const CopyRightText = styled.span`
  font-family: 'Roboto';
  color: ${palette.temp};
`;

function Footer(): ReactElement {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterLinkGroup>
          <Logo>
            <LogoText>Afflunt Closet</LogoText>
          </Logo>

          <FooterMenu>
            <FooterMenuItem href="" target="_blank" rel="noopener noreferrer">
              서비스 이용약관
            </FooterMenuItem>
            <VerticalLine />
            <FooterMenuItem href="" target="_blank" rel="noopener noreferrer">
              개인정보 처리방침
            </FooterMenuItem>
            <VerticalLine />
            <FooterMenuItem href="" target="_blank" rel="noopener noreferrer">
              피드백
            </FooterMenuItem>
          </FooterMenu>
        </FooterLinkGroup>
        <CopyRightText>
          Copyright © Afflunt Closet All rights reserved
        </CopyRightText>
      </FooterInner>
    </FooterWrapper>
  );
}
export default Footer;
