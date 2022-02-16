import useToggle from 'hooks/useToggle';
import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { palette } from 'libs/styles/palette';
import { communityMenus } from 'libs/Lists/NavItems';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const MobileHeaderBlock = styled.div`
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
        <HambergerStyled>
          <GiHamburgerMenu
            color={palette.mainColor}
            size={18}
            onClick={onToggleNav}
          />
        </HambergerStyled>
        <div>
          <div>네모</div>
          <div>검색창</div>
        </div>
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
      </MobileHeaderBlock>
      <NavBar isNav={isNav} onToggleNav={onToggleNav} />
    </div>
  );
}

export default MobileHeader;
