import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Path from 'routes/Path';
import { palette } from 'libs/styles/palette';
import media from 'libs/styles/media';

const NavBarBlock = styled.div`
  position: absolute;
  background-color: ${palette.backgroundColor};
  width: 50%;
  max-width: 331px;
  height: 100%;
  left: 0px;
  top: 0px;
`;

const NavBarH2 = styled.h2`
  margin-left: 20px;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${palette.mainColor};
`;

const Menus = styled.div`
  text-decoration-line: none;
  margin-left: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  ${media.xsmall} {
    margin-left: 15px;
  }
`;

const activeStyle: React.CSSProperties = {
  backgroundColor: `${palette.backgroundHover}`,
  color: `${palette.mainLightColor}`,
};

const nonActiveStyle: React.CSSProperties = {
  color: 'black',
};

function NavBar() {
  const categoryMenus = [
    {
      name: 'Best',
      href: `${Path.TestPage}`,
    },
    {
      name: 'New Arrival',
      href: `${Path.HomePage}`,
    },
    {
      name: 'Outer',
      href: '/Shirt',
    },
    {
      name: 'Shirt',
      href: '/Shirt',
    },
    {
      name: 'Top',
      href: '/Top',
    },
    {
      name: 'Knit',
      href: '/Knit',
    },
    {
      name: 'Bottom',
      href: '/Bottom',
    },
    {
      name: 'Acc',
      href: '/Acc',
    },
  ];

  const communityMenus = [
    {
      name: 'Login',
      href: '/login',
    },
    {
      name: 'Mypage',
      href: '/mypage',
    },
    {
      name: 'Like',
      href: '/like',
    },
  ];
  return (
    <NavBarBlock>
      <div className="category-menu">
        <NavBarH2>CATEGORY</NavBarH2>
        {categoryMenus.map((categoryMenu, index) => (
          <NavLink to={categoryMenu.href} key={index}>
            <Menus className="name">{categoryMenu.name}</Menus>
          </NavLink>
        ))}
      </div>
      <div className="community-menu">
        <NavBarH2>CATEGORY</NavBarH2>
        {communityMenus.map((communityMenu, index) => (
          <NavLink
            to={communityMenu.href}
            key={index}
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
          >
            <Menus className="name">{communityMenu.name}</Menus>
          </NavLink>
        ))}
      </div>
    </NavBarBlock>
  );
}

export default NavBar;
