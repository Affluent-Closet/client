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
  .ele-styled {
    font-size: 16px;
    padding: 0px 8px;
    &:hover {
      color: ${palette.mainLightColor};
    }
  }
`;

function RightHeaderBox() {
  return (
    <WebHeaderRightBox>
      {profileMenus.map(({ icon, href }, index) => (
        <Link to={href}>
          <div className="ele-styled " key={`profile_menu_${index}`}>
            {icon}
          </div>
        </Link>
      ))}
    </WebHeaderRightBox>
  );
}

export default RightHeaderBox;
