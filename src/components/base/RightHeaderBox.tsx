import { profileMenus } from 'libs/Lists/NavItems';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WebHeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: right;
  .right-text {
    font-size: 16px;
    padding: 0px 8px;
  }
`;

function RightHeaderBox() {
  return (
    <WebHeaderRightBox>
      {profileMenus.map(({ name, href }, index) => (
        <Link to={href}>
          <div className="right-text" key={`profile_menu_${index}`}>
            {name}
          </div>
        </Link>
      ))}
    </WebHeaderRightBox>
  );
}

export default RightHeaderBox;
