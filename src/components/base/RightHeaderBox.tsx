import { profileMenus } from 'libs/Lists/NavItems';
import { palette } from 'libs/styles/palette';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WebHeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: right;
`;

const EleStyled = styled.div`
  font-size: 16px;
  padding: 0px 8px;
  &:hover {
    color: ${palette.mainColor};
  }
`;

function RightHeaderBox() {
  return (
    <WebHeaderRightBox>
      {profileMenus.map(({ icon, href }, index) => (
        <Link to={href} key={`profile_menu_${index}`}>
          <EleStyled className="ele-styled ">{icon}</EleStyled>
        </Link>
      ))}
    </WebHeaderRightBox>
  );
}

export default RightHeaderBox;
