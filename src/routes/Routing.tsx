import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const LandingPage = lazy(() => import('pages/LandingPage'));
const GoodsPage = lazy(() => import('pages/GoodsPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const SearchResultPage = lazy(() => import('pages/SearchResultPage'));
const OrderPage = lazy(() => import('pages/OrderPage'));
const CategoryPage = lazy(() => import('pages/CategoryPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const CartPage = lazy(() => import('pages/CartPage'));
const PostGoodsPage = lazy(() => import('pages/PostGoodsPage'));
const PostReviewPage = lazy(() => import('pages/PostReviewPage'));
const LogoutPage = lazy(() => import('pages/LogoutPage'));
const PostSizePage = lazy(() => import('pages/PostSizePage'));
const PaymentPage = lazy(() => import('pages/PaymentPage'));
const SuccessPage = lazy(() => import('pages/SuccessPage'));
const NewBestPage = lazy(() => import('pages/NewBestPage'));
const MyOrderPage = lazy(() => import('pages/MyOrderPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function Routing() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
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
        <Route path={Path.PostGoodsPage} element={<PostGoodsPage />} />
        <Route path={Path.PostReviewPage} element={<PostReviewPage />} />
        <Route path={Path.LogoutPage} element={<LogoutPage />} />
        <Route path={Path.PostGoodsSizePage} element={<PostSizePage />} />
        <Route path={Path.PaymentPage} element={<PaymentPage />} />
        <Route path={Path.SuccessPage} element={<SuccessPage />} />
        <Route path={Path.NewPage} element={<NewBestPage />} />
        <Route path={Path.BestPage} element={<NewBestPage />} />
        <Route path={Path.MyOrderPage} element={<MyOrderPage />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
