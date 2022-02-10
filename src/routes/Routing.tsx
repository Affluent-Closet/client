import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'Pages/HomePage';
import TestPage from 'Pages/TestPage';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path={Path.HomePage} element={<HomePage />} />
      <Route path={Path.TestPage} element={<TestPage />} />
    </Routes>
  );
}

export default Routing;
