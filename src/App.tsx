import NavBar from 'components/NavBar';
import GlobalStyles from 'libs/styles/globalStyles';
import React from 'react';
import './App.css';
import Routing from './routes/Routing';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar />
      <Routing />
    </div>
  );
}

export default App;
