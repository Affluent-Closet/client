import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import TestPage from 'pages/TestPage';
import GoodsPage from 'pages/GoodsPage';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path={Path.LandingPage} element={<LandingPage />} />
      <Route path={Path.TestPage} element={<TestPage />} />
      <Route path={Path.GoodsPage} element={<GoodsPage />} />
    </Routes>
  );
}

export default Routing;
