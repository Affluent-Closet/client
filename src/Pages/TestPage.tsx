import React from 'react';
import styled from 'styled-components';

const TestStyle = styled.div`
  color: red;
`;

function TestPage() {
  return (
    <>
      <TestStyle>TestPage</TestStyle>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
    </>
  );
}

export default TestPage;
