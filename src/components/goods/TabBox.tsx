import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React, { Ref } from 'react';
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
  th: number;
  scrollList: {
    name: string;
    onClick: () => void;
  }[];
}

function TabBox(props: TabBoxProps, forwardedRef: Ref<HTMLDivElement>) {
  const { scrollList, th } = props;
  return (
    <TabBoxWrapper ref={forwardedRef}>
      {scrollList.map(({ onClick, name }, index) => (
        <TabStyled
          type="button"
          onClick={onClick}
          key={`goodsTabs_${index}`}
          className={index === th ? 'active' : ''}
        >
          {name}
        </TabStyled>
      ))}
    </TabBoxWrapper>
  );
}

export default React.forwardRef(TabBox);
