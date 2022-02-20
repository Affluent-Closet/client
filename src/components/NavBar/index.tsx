import React from 'react';
import styled from 'styled-components';
import { palette } from 'libs/styles/palette';
import NavBarProfile from './NavBarProfile';
import NavBarMiddleItem from './NavBarItems';

const NavBarBlock = styled.div<{ isNav: boolean }>`
  width: 75vw;
  max-width: 300px;
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${palette.backgroundColor};
  z-index: 900;
  ${({ isNav }) => (isNav ? 'visibility: visible' : 'visibility : hidden')};
  transition: all 0.3s ease-in-out;
  transform: translateX(${({ isNav }) => (isNav ? 0 : -75)}vw);
`;

const NavBackground = styled.div<{ isNav: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 800;
  opacity: 0.5;
  ${({ isNav }) => (isNav ? 'display: block' : 'display: none')}
`;

interface NavBarProps {
  isNav: boolean;
  onToggleNav: () => void;
}
function NavBar({ isNav, onToggleNav }: NavBarProps) {
  return (
    <>
      <NavBarBlock isNav={isNav}>
        <NavBarProfile onToggleNav={onToggleNav} />
        <NavBarMiddleItem onToggleNav={onToggleNav} />
      </NavBarBlock>
      <NavBackground onClick={onToggleNav} isNav={isNav} />
    </>
  );
}

export default NavBar;
