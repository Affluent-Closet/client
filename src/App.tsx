import GlobalStyles from 'libs/styles/globalStyles';
import React from 'react';
import styled from 'styled-components';
import './App.css';
import MobileHeader from 'components/MobileHeader';
import Routing from './routes/Routing';

const AsideLayout = styled.div`
  margin-left: 331px;
  height: 100%;
`;

function App() {
  return (
    <div className="App">
      <MobileHeader />
      <AsideLayout>
        <GlobalStyles />
        <Routing />
      </AsideLayout>
    </div>
  );
}

export default App;
