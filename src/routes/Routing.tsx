import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import TestPage from 'pages/TestPage';
import GoodsPage from 'pages/GoodsPage';
import SearchPage from 'pages/SearchPage';
import SearchResultPage from 'pages/SearchResultPage';
import CategoryPage from 'pages/CategoryPage';
import NotFoundPage from 'pages/NotFoundPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ProfilePage from 'pages/ProfilePage';
import PostGoodsPage from 'pages/PostGoodsPage';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path={Path.LandingPage} element={<LandingPage />} />
      <Route path={Path.TestPage} element={<TestPage />} />
      <Route path={Path.GoodsPage} element={<GoodsPage />} />
      <Route path={Path.SearchPage} element={<SearchPage />} />
      <Route path={Path.SearchResultPage} element={<SearchResultPage />} />
      <Route path={Path.CategoryPage} element={<CategoryPage />} />
      <Route path={Path.LoginPage} element={<LoginPage />} />
      <Route path={Path.RegisterPage} element={<RegisterPage />} />
      <Route path={Path.ProfilePage} element={<ProfilePage />} />
      <Route path={Path.PostGoodsPage} element={<PostGoodsPage />} />
    </Routes>
  );
}

export default Routing;
