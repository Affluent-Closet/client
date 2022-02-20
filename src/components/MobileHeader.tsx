import useToggle from 'hooks/useToggle';
import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { palette } from 'libs/styles/palette';
import { communityMenus } from 'libs/Lists/NavItems';
import { Link } from 'react-router-dom';
import media from 'libs/styles/media';
import { TextLogo } from 'assets/Img';
import Path from 'routes/Path';
import NavBar from './NavBar';

const MobileHeaderBlock = styled.div`
  display: none;
  position: relative;
  ${media.large} {
    display: block;
  }
`;

const MobileHeaderInner = styled.div`
  display: flex;
  padding: 12px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.border};
`;

const CommutityBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 122px;
  .community-list {
    padding: 0px 2px;
    font-size: 14px;
    color: ${palette.mainColor};
  }
`;

const LogoStyled = styled(Link)`
  img {
    width: 80px;
    height: 30px;
  }
`;

const HambergerStyled = styled.div`
  width: 122px;
  text-align: left;
  padding-left: 10px;
`;

function MobileHeader() {
  const [isNav, onToggleNav] = useToggle();
  return (
    <div>
      <MobileHeaderBlock>
        <MobileHeaderInner>
          <HambergerStyled>
            <GiHamburgerMenu
              color={palette.mainColor}
              size={18}
              onClick={onToggleNav}
            />
          </HambergerStyled>
          <LogoStyled to={Path.HomePage}>
            <img src={TextLogo} alt="사이트 로고" />
          </LogoStyled>
          <div>
            <CommutityBox>
              {communityMenus.map(({ name, href }, index) => (
                <Link
                  key={`community_${index}`}
                  to={href}
                  className="community-list"
                >
                  {name}
                </Link>
              ))}
            </CommutityBox>
          </div>
        </MobileHeaderInner>
        <NavBar isNav={isNav} onToggleNav={onToggleNav} />
      </MobileHeaderBlock>
    </div>
  );
}

export default MobileHeader;
