import { shopMenus } from 'libs/lists/NavItems';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import transitions from 'libs/styles/transitions';
import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavBarMiddleItems = styled.div`
  padding: 6px 20px;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  justify-content: space-between;
  color: ${palette.mainColor};
  cursor: pointer;
  button {
    color: ${palette.mainColor};
  }
`;

const Infos = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin: 0px 20px;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  width: 10rem;
  padding: 5px 20px;
  text-transform: uppercase;
  ${mediaMax.xsmall} {
    margin-left: 15px;
  }
  ${(props) =>
    props.isOpen &&
    css`
      animation: ${transitions.popInFromBottom} 0.4s ease-in-out forwards;
    `}
`;

interface NavBarProfileProps {
  onToggleNav: () => void;
}

function NavBarItems({ onToggleNav }: NavBarProfileProps) {
  const [menuList, setMenuList] = useState(shopMenus);

  const onToggle = (name: string) => {
    setMenuList((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, isOpen: !item.isOpen } : { ...item },
      ),
    );
  };

  return (
    <>
      {menuList.map(({ href, name, subMenus, isOpen }, index) => (
        <div key={`MenuList_${index}`}>
          {href && (
            <NavLink to={href} onClick={() => onToggleNav()}>
              <NavBarMiddleItems className="name">{name}</NavBarMiddleItems>
            </NavLink>
          )}
          {subMenus && (
            <>
              <NavBarMiddleItems onClick={() => onToggle(name)}>
                <span>{name}</span>
                {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </NavBarMiddleItems>
              <Infos isOpen={isOpen} onClick={onToggleNav}>
                {subMenus.map((menu) => (
                  <NavLink to={menu.href} key={`CategoryMenu_${menu.name}`}>
                    <div>{menu.name}</div>
                  </NavLink>
                ))}
              </Infos>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default NavBarItems;
