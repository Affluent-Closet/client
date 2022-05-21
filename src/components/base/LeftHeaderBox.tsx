/* eslint-disable react/jsx-no-useless-fragment */
import { shopMenus } from 'libs/lists/NavItems';
import { palette } from 'libs/styles/palette';
import transitions from 'libs/styles/transitions';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LeftHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
`;
const LeftBox = styled.div`
  .menu-box {
    visibility: hidden;
    position: absolute;
  }
  .menu-styled {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 0px 15px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  &:hover {
    .menu-styled {
      color: ${palette.mainColor};
    }
    .menu-box {
      visibility: visible;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin-left: 15px;
      animation: ${transitions.fadeIn} 0.5s ease-in-out forwards;
    }
    .menu-box-list {
      transition: background-color 0.2s linear;
      width: 160px;
      padding: 30px 20px;
      font-weight: 500;
      background-color: ${palette.backgroundColor};
      &:hover {
        background-color: ${palette.mainColor};
        color: ${palette.backgroundColor};
      }
    }
  }
`;

function LeftHeaderBox() {
  return (
    <LeftHeaderWrapper>
      {shopMenus.map(({ href, name, subMenus }, index) => (
        <LeftBox key={`LeftBox_${index}`}>
          {href && (
            <Link to={href}>
              <div className="menu-styled">{name}</div>
            </Link>
          )}
          {subMenus && (
            <>
              <div className="menu-styled">{name}</div>
              <div className="menu-box">
                {subMenus.map((subMenu, subMenuIndex) => (
                  <Link to={subMenu.href} key={`subMenu_${subMenuIndex}`}>
                    <div className="menu-box-list">{subMenu.name}</div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </LeftBox>
      ))}
    </LeftHeaderWrapper>
  );
}

export default LeftHeaderBox;
