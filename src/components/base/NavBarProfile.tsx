/* eslint-disable jsx-a11y/no-static-element-interactions */
import useToggle from 'hooks/common/useToggle';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled, { css } from 'styled-components';
import { CgMoreVertical } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import transitions from 'libs/styles/transitions';
import useOutSideClick from 'hooks/common/useOutSideClick';
import { profileMenus } from 'libs/lists/NavItems';

const PorfileWrapper = styled.div`
  background-color: ${palette.mainColor};
  height: 134px;
  padding: 20px;
  text-align: left;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-bottom: 15px;
`;

const MemberInfoBox = styled.div`
  color: white;
  font-size: 14px;
  .member-email {
    margin-top: 3px;
    opacity: 0.6;
  }
`;

const MemberLinkBox = styled.div<{ isModal: boolean }>`
  text-align: right;
  .link-box {
    padding: 8px 0px;
    background-color: white;
    position: absolute;
    right: 0;
    left: auto;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
    margin-top: 8px;
    ${(props) =>
      props.isModal &&
      css`
        animation: ${transitions.fadeIn} 0.4s ease-in-out forwards;
      `}
  }
  .non-link-box {
    display: none;
  }
`;

const MemberLinkStyled = styled(Link)`
  display: flex;
  width: 158px;
  height: 36px;
  padding: 8px 16px;
`;
interface NavBarProfileProps {
  onToggleNav: () => void;
}

function NavBarProfile({ onToggleNav }: NavBarProfileProps) {
  const [value, onToggle] = useToggle();
  const onToggleLink = () => {
    onToggle();
    onToggleNav();
  };
  const { targetEl } = useOutSideClick(value, onToggle);
  return (
    <PorfileWrapper>
      <ProfileBox>
        <div>
          <ProfileImg src="https://avatars.githubusercontent.com/u/64634992?v=4" />
          <MemberInfoBox>
            <div>이도현</div>
            <div className="member-email">cctv1998@naver.com</div>
          </MemberInfoBox>
        </div>
        <MemberLinkBox isModal={value}>
          <CgMoreVertical color="white" onClick={onToggle} />
          <div className={value ? 'link-box' : 'non-link-box'} ref={targetEl}>
            {profileMenus.map(({ name, href }) => (
              <MemberLinkStyled
                to={href}
                key={`btnGroup_${name}`}
                onClick={onToggleLink}
              >
                {name}
              </MemberLinkStyled>
            ))}
          </div>
        </MemberLinkBox>
      </ProfileBox>
      {/* 2줄       */}
    </PorfileWrapper>
  );
}

export default NavBarProfile;
