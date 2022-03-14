import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import TestPage from 'pages/TestPage';
import GoodsPage from 'pages/GoodsPage';
import SearchPage from 'pages/SearchPage';
import SearchResultPage from 'pages/SearchResultPage';
import OrderPage from 'pages/OrderPage';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path={Path.LandingPage} element={<LandingPage />} />
      <Route path={Path.TestPage} element={<TestPage />} />
      <Route path={Path.GoodsPage} element={<GoodsPage />} />
      <Route path={Path.SearchPage} element={<SearchPage />} />
      <Route path={Path.SearchResultPage} element={<SearchResultPage />} />
      <Route path={Path.OrderPage} element={<OrderPage />} />
    </Routes>
  );
}

export default Routing;
