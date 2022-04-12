import { profileMenus } from 'libs/lists/NavItems';
import { palette } from 'libs/styles/palette';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WebHeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: right;
  font-size: 16px;
  a {
    padding: 0px 8px;
    &:hover {
      color: ${palette.mainColor};
    }
  }
`;

function RightHeaderBox() {
  return (
    <WebHeaderRightBox>
      {profileMenus.map(({ icon, href }, index) => (
        <Link to={href} key={`profile_menu_${index}`}>
          {icon}
        </Link>
      ))}
    </WebHeaderRightBox>
  );
}

export default RightHeaderBox;
