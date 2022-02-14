import React from 'react';
import styled from 'styled-components';
import { palette } from 'libs/styles/palette';
import NavBarProfile from './NavBarProfile';
import NavBarMiddleItem from './NavBarItems';

const NavBarBlock = styled.div`
  position: fixed;
  background-color: ${palette.backgroundColor};
  width: 75%;
  max-width: 300px;
  height: 100%;
  left: 0px;
  top: 0px;
`;

function NavBar() {
  return (
    <NavBarBlock>
      <NavBarProfile />
      <NavBarMiddleItem />
    </NavBarBlock>
  );
}

export default NavBar;
