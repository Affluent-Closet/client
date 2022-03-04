import GlobalStyles from 'libs/styles/globalStyles';
import React from 'react';
import styled from 'styled-components';
import MobileHeader from 'components/base/MobileHeader';
import WebHeader from 'components/base/WebHeader';
import { mediaSize } from 'libs/styles/media';
import Routing from './routes/Routing';

const ContentsLayout = styled.div`
  /* background-color: aliceblue; */
  max-width: ${mediaSize.xlarge}px;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <MobileHeader />
      <WebHeader />
      <ContentsLayout>
        <Routing />
      </ContentsLayout>
    </div>
  );
}

export default App;
