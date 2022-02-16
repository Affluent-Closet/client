import React from 'react';
import styled from 'styled-components';
import { palette } from 'libs/styles/palette';
import { mediaMinQuery, mediaSize } from 'libs/styles/media';
import { AiOutlineLeft } from 'react-icons/ai';
import NavBarProfile from './NavBarProfile';
import NavBarMiddleItem from './NavBarItems';

const NavBarBlock = styled.div`
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

const ExitBtn = styled(AiOutlineLeft)`
  position: absolute;
  left: 300px;
  top: 24px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

interface NavBarProps {
  isNav: boolean;
  onToggleNav: () => void;
}
function NavBar({ isNav, onToggleNav }: NavBarProps) {
  return (
    <NavBarBlock>
      <div className={isNav ? '' : 'close'}>
        <NavBarInner>
          <NavBarProfile onToggleNav={onToggleNav} />
          <NavBarMiddleItem onToggleNav={onToggleNav} />
        </NavBarInner>
        <ExitBtn />
        <NavBackground onClick={onToggleNav} />
      </div>
    </NavBarBlock>
  );
}

export default NavBar;
