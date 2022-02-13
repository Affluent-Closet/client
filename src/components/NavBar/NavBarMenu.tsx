import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { palette } from 'libs/styles/palette';
import media from 'libs/styles/media';
import { categoryMenus } from 'libs/categoryMenus';
import { communityMenus } from 'libs/communityMenus';
import NavBarProfile from './NavBarProfile';

const NavBarBlock = styled.div`
  position: fixed;
  background-color: ${palette.backgroundColor};
  width: 75%;
  max-width: 300px;
  height: 100%;
  left: 0px;
  top: 0px;
`;

const NavBarH2 = styled.h2`
  margin: 25px 30px;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${palette.mainColor};
`;

const Infos = styled.div`
  margin: 6px 30px;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  width: 10rem;
  padding: 5px 20px;
  text-transform: uppercase;
  ${media.xsmall} {
    margin-left: 15px;
  }
  &:hover {
    background: ${palette.backgroundHover};
    border-radius: 8px;
  }
`;

const CommunityMenuListStyled = styled.div`
  .active {
    .name {
      background: ${palette.backgroundHover};
      border-radius: 8px;
    }
  }
`;

function NavBar() {
  return (
    <NavBarBlock>
      <NavBarProfile />
      <CommunityMenuListStyled>
        <NavBarH2>CATEGORY</NavBarH2>
        {categoryMenus.map(({ href, name }, index) => (
          <NavLink to={href} key={`CategoryMenu_${index}`}>
            <Infos className="name">{name}</Infos>
          </NavLink>
        ))}
      </CommunityMenuListStyled>

      <CommunityMenuListStyled>
        <NavBarH2>CATEGORY</NavBarH2>
        {communityMenus.map(({ href, name }) => (
          <NavLink
            to={href}
            key={`CommunityMenu_${name}`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <Infos className="name">{name}</Infos>
          </NavLink>
        ))}
      </CommunityMenuListStyled>
    </NavBarBlock>
  );
}

export default NavBar;
