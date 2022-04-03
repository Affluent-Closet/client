import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import GoodsPage from 'pages/GoodsPage';
import SearchPage from 'pages/SearchPage';
import SearchResultPage from 'pages/SearchResultPage';
import OrderPage from 'pages/OrderPage';
import CategoryPage from 'pages/CategoryPage';
import NotFoundPage from 'pages/NotFoundPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ProfilePage from 'pages/ProfilePage';
import CartPage from 'pages/CartPage';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path={Path.LandingPage} element={<LandingPage />} />
      <Route path={Path.GoodsPage} element={<GoodsPage />} />
      <Route path={Path.SearchPage} element={<SearchPage />} />
      <Route path={Path.SearchResultPage} element={<SearchResultPage />} />
      <Route path={Path.OrderPage} element={<OrderPage />} />
      <Route path={Path.CategoryPage} element={<CategoryPage />} />
      <Route path={Path.LoginPage} element={<LoginPage />} />
      <Route path={Path.RegisterPage} element={<RegisterPage />} />
      <Route path={Path.ProfilePage} element={<ProfilePage />} />
      <Route path={Path.CartPage} element={<CartPage />} />
    </Routes>
  );
}

export default Routing;
