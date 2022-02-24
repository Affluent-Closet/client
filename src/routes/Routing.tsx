import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'Pages/HomePage';
import TestPage from 'Pages/TestPage';
import GoodsPage from 'Pages/GoodsPage';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path={Path.HomePage} element={<HomePage />} />
      <Route path={Path.TestPage} element={<TestPage />} />
      <Route path={Path.GoodsPage} element={<GoodsPage />} />
    </Routes>
  );
}

export default Routing;
