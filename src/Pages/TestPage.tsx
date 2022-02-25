/* eslint-disable jsx-a11y/alt-text */
import useScrollFadeIn from 'hooks/common/useFadeIn';
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  transform: translate3d(0, 50%, 0);
`;

function TestPage() {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0),
    2: useScrollFadeIn('up', 4, 0.4),
    3: useScrollFadeIn('right', 1, 0.7),
  };
  return (
    <>
      <Title {...animatedItem[0]}>TestPage</Title>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div {...animatedItem[1]}>TestPage</div>
      <div {...animatedItem[2]}>
        <img src="https://avatars.githubusercontent.com/u/64634992?v=4" />
      </div>
    </>
  );
}

export default TestPage;
