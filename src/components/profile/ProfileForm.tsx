import { FlexBetween, ListHead } from 'components/common/CommonComponents';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const ProfileHead = styled(ListHead)`
  font-size: 16px;
  border-bottom: 3px solid ${palette.mainColor};
`;

const RowStyled = styled(FlexBetween)`
  margin: 15px 0;
  text-align: left;
  font-size: 14px;
  .info-tit {
    color: ${palette.temp};
    width: 150px;
    ${mediaMax.small} {
      margin: 5px;
    }
  }
  ${mediaMax.small} {
    display: block;
  }
`;

const ContentStyled = styled(FlexBetween)`
  width: 100%;
  .info-ans {
    width: 65%;
    border: 1px solid ${palette.border};
    border-radius: 4px;
    height: 32px;
  }
`;

const OkayBtn = styled.button`
  font-size: 12px;
  width: 70px;
  height: 25px;
  color: ${palette.mainColor};
  border: 1px solid ${palette.mainColor};
  background-color: white;
  line-height: 12px;
  :hover {
    background-color: ${palette.backgroundColor};
  }
`;

const EndServiceBtn = styled.div`
  border-top: 1px solid black;
  margin-top: 20px;
  padding: 20px;
  font-size: 14px;
  button {
    color: ${palette.temp};
    &:hover {
      color: black;
    }
  }
`;

function ProfileForm() {
  return (
    <>
      <ProfileHead>김첨지 님의 프로필</ProfileHead>
      <div>
        <RowStyled>
          <div className="info-tit">닉네임</div>
          <ContentStyled>
            <input type="text" className="info-ans" />
            <OkayBtn>변경하기</OkayBtn>
          </ContentStyled>
        </RowStyled>
        <RowStyled>
          <div className="info-tit">이메일</div>
          <ContentStyled>
            <div>cctv1998@naver.com</div>
          </ContentStyled>
        </RowStyled>
        <RowStyled>
          <div className="info-tit">연락처</div>
          <ContentStyled>
            <input type="text" className="info-ans" />
            <OkayBtn>변경하기</OkayBtn>
          </ContentStyled>
        </RowStyled>
        <RowStyled>
          <div className="info-tit">SNS 연동</div>
          <ContentStyled>
            <OkayBtn>카카오 연동</OkayBtn>
          </ContentStyled>
        </RowStyled>
        <br />
        <RowStyled>
          <div className="info-tit">새 비밀번호</div>
          <ContentStyled>
            <input type="password" className="info-ans" />
          </ContentStyled>
        </RowStyled>
        <RowStyled>
          <div className="info-tit">비밀번호 확인</div>
          <ContentStyled>
            <input type="password" className="info-ans" />
            <OkayBtn>변경하기</OkayBtn>
          </ContentStyled>
        </RowStyled>
        <EndServiceBtn>
          <button type="button">서비스 탈퇴하기</button>
        </EndServiceBtn>
      </div>
    </>
  );
}

export default ProfileForm;
