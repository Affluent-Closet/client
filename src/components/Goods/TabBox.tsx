import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const TabBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${palette.backgroundColor};
  margin: 0px 30px;
  .active {
    color: black;
    font-weight: 500;
    background-color: white;
  }
  ${mediaMax.large} {
    margin: 0px;
  }
`;

const TabStyled = styled.button`
  display: block;
  text-align: center;
  height: 60px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 22px;
  color: #a0a0a0;
  border: solid 1px ${palette.backgroundHover};
  padding: 20px 0;
  width: 34%;
`;

interface TabBoxProps {
  goodsTabs: {
    element: React.RefObject<HTMLDivElement>;
    onMoveToElement: () => void;
    name: string;
  }[];
  th: number;
}

function TabBox({ goodsTabs, th }: TabBoxProps) {
  return (
    <TabBoxWrapper ref={goodsTabs[th].element}>
      {Array.from(goodsTabs).map(({ onMoveToElement, name }, index) => (
        <TabStyled
          type="button"
          onClick={onMoveToElement}
          key={`goodsTabs_${index}`}
          className={index === th ? 'active' : ''}
        >
          {name}
        </TabStyled>
      ))}
    </TabBoxWrapper>
  );
}

export default TabBox;
