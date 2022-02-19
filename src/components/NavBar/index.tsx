import React from 'react';
import styled from 'styled-components';
import { palette } from 'libs/styles/palette';
import { mediaMinQuery, mediaSize } from 'libs/styles/media';
import NavBarProfile from './NavBarProfile';
import NavBarMiddleItem from './NavBarItems';

const NavBarBlock = styled.div<{ isNav: boolean }>`
  ${mediaMinQuery(mediaSize.large)} {
    display: none;
  }
  .close {
    display: none;
  }
`;
const NavBarInner = styled.div`
  position: fixed;
  background-color: ${palette.backgroundColor};
  width: 75%;
  max-width: 300px;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 900;
`;
const NavBackground = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.4;
  z-index: 1;
`;

interface NavBarProps {
  isNav: boolean;
  onToggleNav: () => void;
}
function NavBar({ isNav, onToggleNav }: NavBarProps) {
  return (
    <NavBarBlock isNav={isNav}>
      <div className={isNav ? '' : 'close'}>
        <NavBarInner>
          <NavBarProfile onToggleNav={onToggleNav} />
          <NavBarMiddleItem onToggleNav={onToggleNav} />
        </NavBarInner>
        <NavBackground onClick={onToggleNav} />
      </div>
    </NavBarBlock>
  );
}

export default NavBar;
